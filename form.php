<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = $_POST["data"];

    // Сохранение данных в файл
    $filename = 'saved-emails.txt';
    file_put_contents($filename, $data . PHP_EOL, FILE_APPEND | LOCK_EX);

    echo 'Данные успешно сохранены в файле.';
} else {
    header("HTTP/1.1 405 Method Not Allowed");
    echo 'Метод не разрешен';
}
?>