ejecutarPrueba1 = function () {
    let mensaje;
    mensaje = recuperarTexto("lblCadena")
    recorrerCadena(mensaje)
}

recorrerCadena = function (cadena) {
    //0123456
    //Juanito
    let caracter;

    for (let posicion = 0; posicion < cadena.length; posicion++) {
        caracter = cadena.charAt(posicion);
        console.log("Caracter " + caracter + " posicion " + posicion);
    }

    for (let posicion = 0; posicion < cadena.length - 1; posicion++) {
        caracter = cadena.charAt(posicion);
        console.log("CARACTER " + caracter + " posicion " + posicion);
    }
}



ejecutarInvertir = function () {
    let mensaje = recuperarTexto("lblCadena")
    invertirCadena(mensaje)
}

invertirCadena = function (cadena) {
    let caracter;
    let resultado = ""
    for (let posicion = cadena.length; posicion >= 0; posicion--) {
        caracter = cadena.charAt(posicion);
        resultado = resultado + caracter
        mostrarTexto("lblInverso", resultado)
    }
}

buscarLetrea = function (cadena, letra) {
    let letraIternada
    let existeLetra = false
    for (let i = 0; i < cadena.length; i++) {
        letraIternada = cadena.charAt(i);
        if (letraIternada == letra) {
            existeLetra = true
        }
    }
    if (existeLetra == true) {
        console.log("Existe")
        return true
    } else {
        console.log("No Existe")
        return false
    }
}

contarMayusculas = function (cadena) {
    let letra;
    let contarMayuscula = 0;
    for (let i = 0; i < cadena.length; i++) {
        letra = cadena.charAt(i);
        if (esMayuscula(letra)){
            contarMayuscula++;
        }
    }
    console.log(contarMayuscula);
}
