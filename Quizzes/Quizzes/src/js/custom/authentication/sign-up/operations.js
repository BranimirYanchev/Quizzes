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
    
    sendData(data, url);
});

function checkPasswords(pass, confirmPass){
    if(pass != confirmPass){
        toastr.error("Passwords does not mach!");
        return false;
    }

    return true;
}

function checkResult(result){
    let messages = {
        email: "Invalid email!",
        password: "Invalid password!",
        username: "Invalid username!"
    }

    for(el in result){
        if(!result[el]){
            toastr.error(messages[el]);
            return false;
        }
    }

    return true;
}

function sendData(data, url){
    const formData = {
        url: url, // The URL to which the request is sent
        type: 'POST', // The type of request: GET, POST, PUT, DELETE, etc.
        data: data,
        success: function(response) {
            let result = JSON.parse(response);
            if(checkResult(result)){
                toastr.success("Signed up successful!");
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            toastr.error('Something went wrong');
        }
    } 

    $.ajax(formData);   
}