<?php
    session_start();
    $servername = "localhost";
    $dbUsername = "root";
    $password = "";
    $dbname = "quizzes";

    try {
        // Create connection
        $conn = new mysqli($servername, $dbUsername, $password, $dbname);
    } catch (mysqli_sql_exception $e) {
        // Handle connection error
        echo "Connection failed: " . $e->getMessage();
    }
?>
