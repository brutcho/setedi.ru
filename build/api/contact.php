<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Конфигурация
$LOG_FILE = __DIR__ . '/contact_log.txt';
$MAX_LOG_SIZE = 5 * 1024 * 1024; // 5MB
$EMAIL_TO = 'welcome@setedi.ru'; // Замените на ваш email
$EMAIL_SUBJECT = 'Новая заявка с сайта Sétedi';

// Чтение входных данных
$data = json_decode(file_get_contents('php://input'), true);

// Валидация
$errors = [];

if (empty($data['name'])) {
    $errors[] = 'Имя обязательно';
} elseif (strlen($data['name']) < 2) {
    $errors[] = 'Имя слишком короткое';
}

if (empty($data['phone'])) {
    $errors[] = 'Телефон обязателен';
} elseif (!preg_match('/^[\d\s\-\+\(\)]{7,20}$/', $data['phone'])) {
    $errors[] = 'Неверный формат телефона';
}

// Если есть ошибки - возвращаем
if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => implode(', ', $errors)]);
    exit;
}

// Подготовка данных
$name = htmlspecialchars(trim($data['name']));
$phone = htmlspecialchars(trim($data['phone']));
$message = !empty($data['message']) ? htmlspecialchars(trim($data['message'])) : 'Не указано';
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$userAgent = $_SERVER['HTTP_USER_AGENT'] ?? 'unknown';
$timestamp = date('Y-m-d H:i:s');

// Формирование письма
$emailBody = "
Новая заявка с сайта Sétedi:

Имя: $name
Телефон: $phone
Сообщение: $message

---
Техническая информация:
IP: $ip
Время: $timestamp
User-Agent: $userAgent
";

// Отправка email
$emailSent = false;
if (!empty($EMAIL_TO)) {
    $headers = "From: no-reply@setedi.ru\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

    $emailSent = mail($EMAIL_TO, $EMAIL_SUBJECT, $emailBody, $headers);
}

// Логирование
$logEntry = "[" . $timestamp . "] IP: " . $ip . "\n";
$logEntry .= "Имя: " . $name . "\n";
$logEntry .= "Телефон: " . $phone . "\n";
$logEntry .= "Сообщение: " . $message . "\n";
$logEntry .= "Email отправлен: " . ($emailSent ? 'Да' : 'Нет') . "\n";
$logEntry .= "User-Agent: " . $userAgent . "\n";
$logEntry .= str_repeat("-", 50) . "\n\n";

// Ротация лога если слишком большой
if (file_exists($LOG_FILE) && filesize($LOG_FILE) > $MAX_LOG_SIZE) {
    $backupFile = $LOG_FILE . '.' . date('Y-m-d_His');
    rename($LOG_FILE, $backupFile);
}

// Запись в лог
file_put_contents($LOG_FILE, $logEntry, FILE_APPEND | LOCK_EX);

// Ответ
echo json_encode([
    'success' => true,
    'message' => 'Заявка получена',
    'data' => [
        'name' => $name,
        'phone' => $phone,
        'timestamp' => $timestamp
    ]
]);
?>
