<?php
    include '../global/database.php';
 
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Get the posted data
        $email = $_POST['email'];
        $password = $_POST['password'];
        $username = $_POST['username'];

        include '../global/data-validation.php';

        if (!in_array(false, $validation, true)) {
            // Prepare and bind
            $stmt = $conn->prepare("INSERT INTO `users` (username, email, password, is_admin) VALUES (?, ?, ?, ?)");
            
            if ($stmt === false) {
                die('Prepare failed: ' . htmlspecialchars($conn->error));
            }
        
            $stmt->bind_param("sssi", $param1, $param2, $param3, $param4);
        
            $param1 = $username;
            $param2 = $email;
            $param3 = hash("sha256", $password); 
            $param4 = 0;
        
            // Execute the statement
            if ($stmt->execute() === false) {
                die('Execute failed: ' . htmlspecialchars($stmt->error));
            }
        
            // Close statement and connection
            $stmt->close();
        }
        
        echo json_encode($validation);
    } else {
        // Return an error response if the request method is not POST
        echo json_encode(['success' => false, 'message' => 'Invalid request method']);
    }
?>
