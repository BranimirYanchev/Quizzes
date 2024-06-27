$('[data-kt-password-meter-control="visibility"]').on('click', function() {
  
    var $passwordField = $('input[name="password"]');
    var $eyeSlashIcon = $(this).find('.ki-eye-slash');
    var $eyeIcon = $(this).find('.ki-eye');

    if ($passwordField.attr('type') === 'password') {
        $passwordField.attr('type', 'text');
        $eyeSlashIcon.addClass('d-none');
        $eyeIcon.removeClass('d-none');
    } else {
        $passwordField.attr('type', 'password');
        $eyeSlashIcon.removeClass('d-none');
        $eyeIcon.addClass('d-none');
    }
});