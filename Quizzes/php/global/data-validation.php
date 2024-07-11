<?php
    $isEmailValid = false;
    function areFieldsEmpty($username, $password, $email = " "){
        if(strlen($username) == 0 || strlen($password) == 0 || strlen($email) == 0){
            return true;
        }

        return false;
    }

    function checkData($data = "", $pattern) {
        // Use preg_match to check if the email matches the pattern
        return preg_match($pattern, $data) === 1;
    }
    
    function checkPasswords($password, $db_passowrd) {
        if(hash("sha256", $password) == $db_passowrd) {
            return true;
        }

        return false;
    }

    function getDataFromTheDatabase($conn, $username){
        // Declare useful variables
        $db_password = "";
        $is_stmt_fetch = true;

       // Prepare and bind
        $stmt = $conn->prepare("SELECT username, password FROM `users` WHERE username = ?");
        $stmt->bind_param("s", $username);
        
        // Execute the statement
        $stmt->execute();

        // Get the result set from the executed statement
        $result = $stmt->get_result();  

        // Fetch data from the result set
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $db_password = $row["password"];
            }
        } else {
            $is_stmt_fetch = false;
        }

        return ['stmt' => $is_stmt_fetch, 'password' => $db_password];
    }

    $data = getDataFromTheDatabase($conn, $username);

    function checkIfUserExists($stmt){
        // Fetch value
        if (!$stmt) {
            return false; // User does not exist
        }

        return true;
    }
    
    if (isset($email) && checkData($email, $patterns['email'])) {
        $isEmailValid = true;
        if(areFieldsEmpty($username, $password)){
            $validation = ['are_fields_empty' => true];
            return;
        }
    }else{
        if(areFieldsEmpty($username, $password)){
            $validation = ['are_fields_empty' => true];
            return;
        }
    }

  

    $patterns = [        
        'username'=> '/^[a-zA-Z0-9_]{3,20}$/',
        'email' => '/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/',
        'password'=> '/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/'
    ];

    $validation = [
        'username' => checkData($username, $patterns['username']),
        'email' => $isEmailValid, 
        'password' => checkData($password, $patterns['password']),
        'is_user_exists' => checkIfUserExists($data['stmt']),
        'is_passwords_match' => checkPasswords($password, $data['password']),
        'are_fields_empty' => false
    ];
?>