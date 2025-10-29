<?php
require_once __DIR__ . '/../vendor/autoload.php';

use Twig\Environment;
use Twig\Loader\FilesystemLoader;

$loader = new FilesystemLoader(__DIR__ . '/../templates');
$twig = new Environment($loader, [
    'cache' => false,
    'debug' => true,
]);

$twig->addGlobal('baseUrl', '/');

$requestUri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$requestUri = str_replace('/twig/public', '', $requestUri);
$requestUri = trim($requestUri, '/');

if (empty($requestUri)) {
    $page = 'landing';
} else {
    $page = $requestUri;
}

$validPages = ['landing', 'login', 'signup', 'dashboard'];

if (!in_array($page, $validPages)) {
    http_response_code(404);
    echo $twig->render('404.html.twig');
    exit;
}

try {
    echo $twig->render($page . '.html.twig');
} catch (Exception $e) {
    http_response_code(500);
    echo "Error: " . $e->getMessage();
}
