//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta = ""
esMayuscula = function (caracter) {
    let caracterAscii = caracter.charCodeAt(0)
    if (caracterAscii >= 65 || caracterAscii <= 90) {
        return true
    } else {
        return false
    }
}

guardarPalabra = function () {
    let letra
    let contarMayusculas = 0;
    let palabra = recuperarTexto("txtSecreta")
    if (palabra.length != 5) {
        alert("Debe ingresar una palabra de 5 letras mayusculas")
    }
    for (let i = 0; i < palabra.length; i++) {
        letra = palabra.charAt(i)
        if (letra.charCodeAt(0) >= 65 && letra.charCodeAt(0) <= 90) {
            contarMayusculas++
        }
    }
    if (contarMayusculas != palabra.length ) {
        alert("Debe ingresar una palabra de 5 letras mayusculas")
    }else{
        palabraSecreta=palabra
    }
}