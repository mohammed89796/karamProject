<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header('Content-Type: application/json');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "karamdb";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// تغيير الاستعلام ليعرض كل التبرعات
$sql = "SELECT * FROM donations";  // إزالة الـ LIMIT بحيث يتم جلب كل السجلات
$result = $conn->query($sql);

$donations = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $donations[] = $row;  // إضافة كل سجل إلى المصفوفة
    }
    echo json_encode($donations);  
} else {
    echo json_encode([]);  // إذا لم توجد أي سجلات
}

$conn->close();
?>
