<?php
$webhook = 'https://script.google.com/macros/s/AKfycbyXHKiQ2mxzY0eH6LxQaXsxsOFHUr_JKdIpbcgg3knEZ3bkCHiasb419OnsjL0I3LDMQQ/exec';
$payload = json_encode([
    'name'    => 'Test User',
    'email'   => 'test@example.com',
    'phone'   => '1234567890',
    'date'    => date('Y-m-d H:i:s'),
    'message' => 'This is a test message from PHP CLI.',
]);
$ch = curl_init($webhook);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
$result = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$error = curl_error($ch);
curl_close($ch);
echo "HTTP Code: $http_code\n";
echo "Response: $result\n";
if ($error) {
    echo "Error: $error\n";
}
?>
