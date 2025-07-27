<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);


ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    http_response_code(200);
    exit;
}

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");

require 'dbconnection.php';

try {
    $rawData = file_get_contents("php://input");
    $data = json_decode($rawData, true);

    if (!$data) {
        http_response_code(400);
        echo json_encode(['status' => 'error', 'message' => 'Invalid JSON input.']);
        exit;
    }

    $required = ['name', 'email', 'currency', 'nationality', 'phone', 'amount', 'address', 'donation_type', 'place'];

    foreach ($required as $field) {
        if (empty($data[$field]) && $data[$field] !== '0') {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => "Missing field: $field"]);
            exit;
        }
    }

    $data['amount'] = floatval($data['amount']);

    $stmt = $conn->prepare("INSERT INTO donations (`name`, `email`, `currency`, `nationality`, `phone`, `amount`, `address`, `donation_type`, `place`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");

    $stmt->bind_param(
        "sssssssss",
        $data['name'],
        $data['email'],
        $data['currency'],
        $data['nationality'],
        $data['phone'],
        $data['amount'],
        $data['address'],
        $data['donation_type'],
        $data['place']
    );

    $stmt->execute();

    echo json_encode(['status' => 'success', 'message' => 'Donation submitted successfully.']);

    $stmt->close();
    $conn->close();
} catch (mysqli_sql_exception $e) {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Database error: ' . $e->getMessage()]);
}
?>
