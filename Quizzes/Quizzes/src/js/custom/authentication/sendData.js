function sendData(data, url, successMessage, redirectUrl){
    const formData = {
        url: url, // The URL to which the request is sent
        type: 'POST', // The type of request: GET, POST, PUT, DELETE, etc.
        data: data,
        success: function(response) {
            let result = JSON.parse(response);

            if(checkResult(result)){
                toastr.success(successMessage);
                window.open(redirectUrl, '_self')
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            toastr.error('Something went wrong');
        }
    } 

    $.ajax(formData);   
}