function validarPassword(password) {
    // Verifica que no esté vacía, tenga al menos 8 caracteres, contenga una mayúscula y un número
    if (!password || password.length < 8) {
        return false;
    }

    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneNumero = /[0-9]/.test(password);

    return tieneMayuscula && tieneNumero;
}

module.exports = validarPassword;