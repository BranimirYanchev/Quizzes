let form = document.getElementById('kt_sign_in_form');
let submitButton = $('#kt_sign_in_submit');
let url = 'php/authentication/sign-in.php';

submitButton.on('click', (e) => {
    e.preventDefault();

    let data = {
        password: form.password.value,
        username: form.username.value
    };
    
    sendData(data, url, "Successfully logged in!", "index.php");
});

function checkResult(result){
    if(result['are_fields_empty']){
        toastr.error("All of the fields must be filled!");
        return false;
    }

    let messages = {
        username: "Invalid username!",
        password: "Invalid password!",
        is_passwords_match: "Wrong password!",
    }

    for(el in result){
        if(!result[el] && messages.hasOwnProperty(el)){
            toastr.error(messages[el]);
            return false;
        }
    }

    if(checkIfUserExists(result['is_user_exists'], "This user does not exists!")){
        return true;
    }

    return false;
}

function checkIfUserExists(isUserExists, message){
    if(!isUserExists){
        toastr.error(message);
        return false;
    }

    return true;
}
