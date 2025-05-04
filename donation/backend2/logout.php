<?php
session_start();
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

session_unset();
session_destroy();

echo json_encode(['status' => 'success']);
?>
