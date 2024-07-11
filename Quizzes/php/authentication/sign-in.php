<?php
    include '../global/database.php';
 
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $password = $_POST['password'];
        $username = $_POST['username'];

        include '../global/data-validation.php';
        
        echo json_encode($validation);
    } else {
        // Return an error response if the request method is not POST
        echo json_encode(['success' => false, 'message' => 'Invalid request method']);
    }
?>
