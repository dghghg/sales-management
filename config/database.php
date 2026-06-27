<?php
// Database Configuration
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'sales_management_db');

// Company Information
define('COMPANY_NAME', 'الشركة الأوروبية للصناعات المعدنية المحدودة');
define('COMPANY_NAME_EN', 'European Industries for Metals Company');
define('CREATED_BY', 'تم الإنشاء بواسطة المحاسب إسلام سعيد');

try {
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    $conn->set_charset("utf8mb4");
} catch (Exception $e) {
    die("Database Error: " . $e->getMessage());
}
?>