$(document).ready(function () {
    $('input').keyup(function () {
        let name = document.getElementById('name').value
        let lastname = document.getElementById('lastname').value
        let email = document.getElementById('email').value
        let password = document.getElementById('password').value
        let confirmpassword = document.getElementById('password-confirm').value


        if (name === '' || lastname === '' || email === '' || password === '' || confirmpassword === '') {
            $('#Registrarse').prop('disabled', true);
        }
        else if(password !== confirmpassword){
            $('#Registrarse').prop('disabled', true);
        }
         else {
            $('#Registrarse').prop('disabled', false);
        }
    });

});
