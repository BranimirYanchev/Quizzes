<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the posted data
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Dummy check for example purposes
    if ($email === 'user@example.com' && $password === 'password123') {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false]);
    }
} else {
    // Return an error response if the request method is not POST
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
}
?>
