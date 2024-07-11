let form = document.getElementById('kt_sign_up_form');
let submitButton = $('#kt_sign_up_submit');
let url = 'php/authentication/sign-up.php';

submitButton.on('click', (e) => {
    e.preventDefault();

    let data = {
        email: form.email.value, 
        password: form.password.value,
        username: form.username.value
    };

    if(!checkPasswords(data.password, form.confirmPassword.value)){
        return;
    }
    
    sendData(data, url, "Successfully signed up!", "index.php");
});

function checkPasswords(pass, confirmPass){
    if(pass != confirmPass){
        toastr.error("Passwords does not mach!");
        return false;
    }

    return true;
}

function checkResult(result){
    if(result['are_fields_empty']){
        toastr.error("All of the fields must be filled!");
        return false;
    }


    let messages = {
        email: "Invalid email!",
        password: "Invalid password!",
        username: "Invalid username!",
    }

    for(el in result){
        if(!result[el]){
            toastr.error(messages[el]);
            return false;
        }
    }

    if(!checkIfUserExists(result['is_user_exists'], "This user already exists!")){
        return true;
    }

    return false;
}

function checkIfUserExists(isUserExists, message){
    if(isUserExists){
        toastr.error(message);
        return true;
    }

    return false;
}