<?php
session_start();
require_once 'config/database.php';
?>
<!DOCTYPE html>
<html dir="rtl" lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo isset($page_title) ? $page_title . ' | ' : ''; echo COMPANY_NAME; ?></title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.rtl.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css">
    <link href="assets/css/style.css" rel="stylesheet">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.php">
                <i class="bi bi-graph-up"></i> <?php echo COMPANY_NAME; ?>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="index.php"><i class="bi bi-house"></i> الرئيسية</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="invoiceDropdown" role="button" data-bs-toggle="dropdown">
                            <i class="bi bi-receipt"></i> الفواتير
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="invoiceDropdown">
                            <li><a class="dropdown-item" href="invoices/create.php">إنشاء فاتورة جديدة</a></li>
                            <li><a class="dropdown-item" href="invoices/list.php">عرض الفواتير</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="returns/create.php">مرتجع مبيعات</a></li>
                            <li><a class="dropdown-item" href="returns/list.php">عرض المرتجعات</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="reportDropdown" role="button" data-bs-toggle="dropdown">
                            <i class="bi bi-bar-chart"></i> التقارير
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="reportDropdown">
                            <li><a class="dropdown-item" href="reports/sales_report.php">تقرير المبيعات</a></li>
                            <li><a class="dropdown-item" href="reports/product_report.php">تقرير الأصناف</a></li>
                            <li><a class="dropdown-item" href="reports/customer_report.php">تقرير العملاء</a></li>
                            <li><a class="dropdown-item" href="reports/payment_report.php">تقرير السدادات</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="managementDropdown" role="button" data-bs-toggle="dropdown">
                            <i class="bi bi-sliders"></i> الإدارة
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="managementDropdown">
                            <li><a class="dropdown-item" href="management/customers.php">العملاء</a></li>
                            <li><a class="dropdown-item" href="management/products.php">الأصناف</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="container-fluid mt-4">