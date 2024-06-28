let form = $('#kt_sign_up_form');
let submitButton = $('#kt_sign_up_submit');
let url = '../../../../php/authentication/sign-up.php';

submitButton.on('click', (e) => {
    e.preventDefault();
    let data = new FormData(form);
    alert(1)
    sendData(data, url);
});

function sendData(data, url){
    alert(data);
    const formData = {
        url: url, // The URL to which the request is sent
        type: 'POST', // The type of request: GET, POST, PUT, DELETE, etc.
        data: data,
        success: function(result) {
            if(result == true){
                toastr.success("You have signed up successfully!");
            }
        },
        error: function(xhr, status, error) {
            alert(error);
        }
    }

    $.ajax(formData);   
}