<?php
// router.php for local development server
$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
$file = __DIR__ . $path;

if ($path !== '/' && file_exists($file) && !is_dir($file)) {
    return false; // serve static file as-is
}

if (file_exists($file . '.php')) {
    require $file . '.php';
    return true;
}

if (file_exists($file . '.html')) {
    require $file . '.html';
    return true;
}

// Fallback to index.php if root or not found
if ($path === '/' && file_exists(__DIR__ . '/index.php')) {
    require __DIR__ . '/index.php';
    return true;
}

return false;
