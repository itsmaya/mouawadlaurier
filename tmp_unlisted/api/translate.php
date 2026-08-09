<?php
/**
 * Proxy de traduction — Fisheye × TotalEnergies
 * Utilise l'API DeepL Free (500 000 caractères/mois gratuits).
 *
 * 1. Créer un compte sur https://deepl.com/fr/pro-api (plan Free)
 * 2. Copier la clé API dans $apiKey ci-dessous
 * 3. Déposer ce fichier dans : totalenergies-social-generator/api/translate.php
 */

$apiKey = '7db0e2cd-6638-41ce-93fe-58f73ef5fd43:fx'; // Format : xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx:fx

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); exit; }
if ($_SERVER['REQUEST_METHOD'] !== 'POST')    { http_response_code(405); echo json_encode(['error'=>'Method not allowed']); exit; }

$body = json_decode(file_get_contents('php://input'), true);
if (!$body || empty($body['texts']) || empty($body['target_lang'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing texts or target_lang']);
    exit;
}

/* DeepL Free utilise api-free.deepl.com, DeepL Pro utilise api.deepl.com
   Les clés Free se terminent par ":fx" */
$isFree  = substr(trim($apiKey), -3) === ':fx';
$baseUrl = $isFree ? 'https://api-free.deepl.com' : 'https://api.deepl.com';

$payload = json_encode([
    'text'        => $body['texts'],
    'target_lang' => strtoupper($body['target_lang']),
    'source_lang' => isset($body['source_lang']) ? strtoupper($body['source_lang']) : null,
    'formality'   => 'prefer_more', // registre formel pour le corporate
]);

$ch = curl_init($baseUrl . '/v2/translate');
curl_setopt_array($ch, [
    CURLOPT_POST           => true,
    CURLOPT_POSTFIELDS     => $payload,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER     => [
        'Content-Type: application/json',
        'Authorization: DeepL-Auth-Key ' . trim($apiKey),
    ],
    CURLOPT_TIMEOUT => 15,
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$error    = curl_error($ch);
curl_close($ch);

if ($error) { http_response_code(502); echo json_encode(['error'=>'cURL: '.$error]); exit; }

http_response_code($httpCode);
echo $response;
