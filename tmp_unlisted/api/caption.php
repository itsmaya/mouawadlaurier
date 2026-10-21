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
 */

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
    $entetes = ['x-copy-ai-api-key: ' . $cle, 'Content-Type: application/json'];
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
    curl_close($ch);
    return [$code, $reponse, $erreur];
}

if ($action === 'run') {
    $variables = isset($body['variables']) && is_array($body['variables']) ? $body['variables'] : [];
    list($code, $rep, $err) = appel($base . '/run', 'POST',
        ['startVariables' => $variables, 'metadata' => ['api' => true]], $copyAiKey);
    if ($err) { http_response_code(502); echo json_encode(['error' => 'Copy.ai injoignable : ' . $err]); exit; }
    $json = json_decode($rep, true);
    if ($code >= 400) {
        http_response_code($code);
        echo json_encode(['error' => 'Copy.ai a refusé la demande', 'detail' => $json ?: $rep]);
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
        echo json_encode(['error' => 'Lecture du run impossible', 'detail' => $json ?: $rep]);
        exit;
    }
    $d = isset($json['data']) ? $json['data'] : [];
    echo json_encode([
        'status'  => isset($d['status']) ? $d['status'] : 'INCONNU',
        'output'  => isset($d['output']) ? $d['output'] : null,
        'credits' => isset($d['credits']) ? $d['credits'] : null
    ]);
    exit;
}

http_response_code(400);
echo json_encode(['error' => 'action inconnue (run | status)']);
