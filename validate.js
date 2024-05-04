let password = document.querySelector('#passwd');
let passwordC = document.querySelector('#passwdC');

password.addEventListener('input', () => {
    if (password.value !== passwordC.value) {
       password.setCustomValidity('Passwords do not match');
       passwordC.setCustomValidity('Passwords do not match');
    } else {
        password.setCustomValidity('');
        passwordC.setCustomValidity('');
    }
});

passwordC.addEventListener('input', () => {
    if (password.value !== passwordC.value) {
       password.setCustomValidity('Passwords do not match');
       passwordC.setCustomValidity('Passwords do not match');
    } else {
        password.setCustomValidity('');
        passwordC.setCustomValidity('');
    }
});



