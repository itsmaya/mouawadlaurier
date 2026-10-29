<?php
/**
 * Relais Copy.ai — Fisheye × TotalEnergies
 * ----------------------------------------------------------------------
 * Pourquoi un relais plutôt qu'un appel direct depuis le navigateur :
 *   1. l'API Copy.ai n'autorise pas les appels navigateur (CORS) ;
 *   2. une clé posée dans une page est lisible par n'importe qui.
 *
 * Deux façons de fournir la clé, par ordre de priorité :
 *   A. En-tête X-CopyAI-Key envoyé par l'application. La clé reste alors
 *      stockée dans le navigateur de l'utilisateur, ce fichier ne fait que
 *      la transmettre et n'en garde aucune trace.
 *   B. Fichier api/caption-config.php à côté de celui-ci, qui définit
 *      $copyAiKey = '...'; pratique si plusieurs personnes utilisent
 *      l'outil et qu'on ne veut pas que chacune saisisse la clé.
 *
 * Appels acceptés (POST JSON) :
 *   { "action":"run",    "workflowId":"...", "variables":{...} }
 *       -> { "runId":"..." }
 *   { "action":"status", "workflowId":"...", "runId":"..." }
 *       -> { "status":"PROCESSING"|"COMPLETE", "output":{...}, "credits":n }
 *
 * PHP 8.5 : curl_close() est déprécié. Avec l'affichage des erreurs actif,
 * l'avertissement s'écrivait AVANT le JSON et le navigateur ne pouvait plus
 * le lire (« JSON.parse: unexpected character »). Retiré, et l'affichage
 * des erreurs est coupé pour ce fichier.
 */

ini_set('display_errors', '0');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-CopyAI-Key');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); exit; }
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

/* ── Clé ──────────────────────────────────────────────────────────────── */
$copyAiKey = '';
if (file_exists(__DIR__ . '/caption-config.php')) {
    include __DIR__ . '/caption-config.php';   // doit définir $copyAiKey
}
$entetes = function_exists('getallheaders') ? getallheaders() : [];
foreach ($entetes as $nom => $valeur) {
    if (strtolower($nom) === 'x-copyai-key' && trim($valeur) !== '') {
        $copyAiKey = trim($valeur);
    }
}
if ($copyAiKey === '') {
    http_response_code(401);
    echo json_encode(['error' => 'Clé Copy.ai absente. Saisis-la dans les réglages de l\'application, ou dépose api/caption-config.php sur le serveur.']);
    exit;
}

/* ── Requête ──────────────────────────────────────────────────────────── */
$body = json_decode(file_get_contents('php://input'), true);
$action     = isset($body['action']) ? $body['action'] : '';
$workflowId = isset($body['workflowId']) ? trim($body['workflowId']) : '';
if ($workflowId === '') {
    http_response_code(400);
    echo json_encode(['error' => 'workflowId manquant']);
    exit;
}

$base = 'https://api.copy.ai/api/workflow/' . rawurlencode($workflowId);

function appel($url, $methode, $charge, $cle) {
    $ch = curl_init($url);
    $entetes = ['x-copy-ai-api-key: ' . $cle, 'Content-Type: application/json', 'Cache-Control: no-cache'];
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 30);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $entetes);
    if ($methode === 'POST') {
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($charge));
    }
    $reponse = curl_exec($ch);
    $code    = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $erreur  = curl_error($ch);
    return [$code, $reponse, $erreur];   // pas de curl_close : déprécié en PHP 8.5
}

if ($action === 'run') {
    $variables = isset($body['variables']) && is_array($body['variables']) ? $body['variables'] : [];
    list($code, $rep, $err) = appel($base . '/run', 'POST',
        ['startVariables' => $variables, 'metadata' => ['api' => true]], $copyAiKey);
    if ($err) { http_response_code(502); echo json_encode(['error' => 'Copy.ai injoignable : ' . $err]); exit; }
    $json = json_decode($rep, true);
    if ($code >= 400) {
        http_response_code($code);
        echo json_encode(['error' => 'Copy.ai a refusé la demande (code ' . $code . ')', 'detail' => $json ?: $rep]);
        exit;
    }
    echo json_encode(['runId' => isset($json['data']['id']) ? $json['data']['id'] : null, 'brut' => $json]);
    exit;
}

if ($action === 'status') {
    $runId = isset($body['runId']) ? trim($body['runId']) : '';
    if ($runId === '') { http_response_code(400); echo json_encode(['error' => 'runId manquant']); exit; }
    list($code, $rep, $err) = appel($base . '/run/' . rawurlencode($runId), 'GET', null, $copyAiKey);
    if ($err) { http_response_code(502); echo json_encode(['error' => 'Copy.ai injoignable : ' . $err]); exit; }
    $json = json_decode($rep, true);
    if ($code >= 400) {
        http_response_code($code);
        echo json_encode(['error' => 'Lecture du run impossible (code ' . $code . ')', 'detail' => $json ?: $rep]);
        exit;
    }
    $d = isset($json['data']) && is_array($json['data']) ? $json['data'] : [];
    /* La doc Copy.ai montre deux formes : état dans data.status (cas réel
       constaté), ou à la racine. On prend le premier qui est un état de run. */
    $etat = isset($d['status']) ? $d['status'] : null;
    if (!$etat && isset($json['status']) && !in_array($json['status'], ['success', 'error'], true)) $etat = $json['status'];
    $sortie = isset($d['output']) ? $d['output'] : (isset($json['output']) ? $json['output'] : null);
    $reponse = [
        'status'  => $etat ? strtoupper($etat) : 'INCONNU',
        'output'  => $sortie,
        'credits' => isset($d['credits']) ? $d['credits'] : null
    ];
    /* Diagnostic : ce que Copy.ai dit avoir reçu en entrée (noms et longueur
       des valeurs seulement, pas le contenu). Sert quand un run se met en pause. */
    /* Pause ou échec : on renvoie ce que Copy.ai dit du run (hors entrées et
       sorties), pour afficher la raison sans aller la chercher dans Copy.ai. */
    if ($etat && in_array(strtoupper($etat), ['PAUSED', 'FAILED'], true)) {
        $infos = $d; unset($infos['input'], $infos['output']);
        $reponse['infos'] = mb_substr(json_encode($infos, JSON_UNESCAPED_UNICODE), 0, 700);
    }
    if (isset($d['input']) && is_array($d['input'])) {
        $recu = [];
        foreach ($d['input'] as $k => $v) $recu[$k] = is_string($v) ? mb_strlen($v) : (is_null($v) ? 0 : -1);
        $reponse['recu'] = $recu;
    }
    if (!$etat) $reponse['detail'] = mb_substr((string) $rep, 0, 400);   // pour diagnostiquer
    echo json_encode($reponse);
    exit;
}

http_response_code(400);
echo json_encode(['error' => 'action inconnue (run | status)']);
