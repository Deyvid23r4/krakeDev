validarPassword = function (password) {
    let mensaje = "";
    let letra;
    let existeMayuscula = true;
    let contarMayuscula = 0;
    let existeMinuscula = true;
    let contarMinuscula = 0;
    let existeDigito = true;
    let contarDigito = 0;
    let existeCaracter = true;
    let contarCaracter = 0;

    if (password.length < 8) {
        mensaje = "Debe tener un minimo de 8 caracteres."
    }
    if (password.length > 16) {
        mensaje = mensaje + "Debe tener un maximo de 16 caracteres."
    }

    for (let i = 0; i < password.length; i++) {
        letra = password.charAt(i)
        if (esMayuscula(letra)) {
            contarMayuscula++
        }
        if (contarMayuscula >= 1) {
            existeMayuscula = true
        } else {
            existeMayuscula = false
        }

        if (esMinuscula(letra)) {
            contarMinuscula++
        }
        if (contarMinuscula >= 1) {
            existeMinuscula = true
        } else {
            existeMinuscula = false
        }

        if (esDigito(letra)) {
            contarDigito++
        }
        if (contarDigito >= 1) {
            existeDigito = true
        } else {
            existeDigito = false
        }

        if (esCaracterEspecial(letra)) {
            contarCaracter++
        }
        if (contarCaracter >= 1) {
            existeCaracter = true
        } else {
            existeCaracter = false
        }
    }

    if (existeMayuscula == false) {
        mensaje = mensaje + "Debe tener al menos una mayuscula."
    }
    if (existeMinuscula == false) {
        mensaje = mensaje + "Debe tener al menos una minuscula."
    }
    if (existeDigito == false) {
        mensaje = mensaje + "Debe tener al menos un numero."
    }
    if (existeCaracter == false) {
        mensaje = mensaje + "Debe tener al menos un caracter especial como(*,-,_)."
    }
    console.log(mensaje);
    if (mensaje == "") {
        mostrarTexto("lblValidacion", "PASSWORD CORRECTO")
    } else {
        mostrarTexto("lblValidacion", mensaje)
    }
}

ejecturaValidacion = function () {
    let password = recuperarTexto("lblPassword")
    validarPassword(password)
}