let form = $('#kt_sign_up_form');
let submitButton = $('#kt_sign_up_submit');

submitButton.on('click', (e) => {
    e.preventDefault();
    alert(isValid);
})

function sendData(data, url){
    const formData = {
        url: url, // The URL to which the request is sent
        type: 'POST', // The type of request: GET, POST, PUT, DELETE, etc.
        data: data,
        success: function(result) {
            if(result == true){
                toastr.success("You have signed up successfully!");
                open('../Admin Panel/index.php', '_self');
            }
        },
        error: function(xhr, status, error) {
            alert(error);
        }
    }
    $.ajax(formData);   
}