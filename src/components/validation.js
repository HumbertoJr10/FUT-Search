export default function validation (input) {
    let regex = /\S+@\S+\.\S+/;
    var regexpass = new RegExp("^(?=.*[0-9])");
    let errors = { userErrros: '', passErrors: '' }

    if (!regex.test(input.username)) {
        errors.userErrros= 'Debe introducir un Email válido.'
    } else if (input.username==='') {
        errors.userErrros= 'Campo Email no puede estar vacío.'
    } else if (input.username.length>35) {
        errors.userErrros= 'Debe tener como máximo 35 caracteres.'
    }

    if (input.password.length<6 || input.password.length>10) {
        errors.passErrors = 'La contraseña debe tener entre 6 y 10 caracteres.'
    } else if (!regexpass.test(input.password)) {
        errors.passErrors = 'Su contraseña debe contener al menos un número.'
    }

    return errors
}