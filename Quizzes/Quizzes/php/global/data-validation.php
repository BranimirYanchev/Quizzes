<?php
    function checkData($data, $pattern) {
        // Use preg_match to check if the email matches the pattern
        return preg_match($pattern, $data) === 1;
    }

    $patterns = [        
        'username'=> '/^[a-zA-Z0-9_]{3,20}$/',
        'email' => '/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/',
        'password'=> '/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/'
    ];

    $validation = [
        'username' => checkData($username, $patterns['username']),
        'email' => checkData($email, $patterns['email']), 
        'password' => checkData($password, $patterns['password']),






















































































        
    ];
?>