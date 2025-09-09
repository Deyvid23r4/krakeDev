esMayuscula = function (caracter) {
    let mayuscula = caracter.charCodeAt(0)
    if (mayuscula >= 65 && mayuscula <= 90) {
        return true
    } else
        return false
}

esDigito = function (caracter) {
    let digito = caracter.charCodeAt(0)
    if (digito >= 48 && digito <= 57) {
        return true
    } else
        return false
}

esGuion = function (caracter) {
    let guion = caracter.charCodeAt(0)
    if (guion === 45) {
        return true
    } else
        return false
}

validarEstructura = function (placa) {
    let mensaje = "";
    if (placa.length < 7 || placa.length > 8) {
        return "La placa debe tener 7 u 8 caracteres"
    } else {
        if (!esMayuscula(placa.charAt(0))) {
            mensaje = mensaje + "El primer caracter debe ser una letra mayuscula. "
        }
        if (!esMayuscula(placa.charAt(1))) {
            mensaje = mensaje + "El segundo caracter debe ser una letra mayuscula. "
        }
        if (!esMayuscula(placa.charAt(2))) {
            mensaje = mensaje + "El tercer caracter debe ser una letra mayuscula. "
        }
        if (!esGuion(placa.charAt(3))) {
            mensaje = mensaje + "El cuarto caracter debe ser un guion. "
        }
        if (!esDigito(placa.charAt(4))) {
            mensaje = mensaje + "El quinto caracter debe ser un digito. "
        }
        if (!esDigito(placa.charAt(5))) {
            mensaje = mensaje + "El sexto caracter debe ser un digito. "
        }
        if (!esDigito(placa.charAt(6))) {
            mensaje = mensaje + "El septimo caracter debe ser un digito. "
        }
        if (placa.length === 8) {
            if (!esDigito(placa.charAt(7))){
                mensaje = mensaje + "El octavo caracter debe ser un digito."
            }
        }
        if(mensaje===""){
            return null
        }else{
            return mensaje;
        }
    }
}