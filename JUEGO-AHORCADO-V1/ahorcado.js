//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta = ""
let intentos = 0;
let coincidencias = 0;
let letrasEncontradas = 0;
let errores=0;
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
    if (contarMayusculas != palabra.length) {
        alert("Debe ingresar una palabra de 5 letras mayusculas")
    } else {
        palabraSecreta = palabra
    }
}

mostrarLetra = function (letra, posicion) {
    if (posicion == 0) {
        mostrarTexto("div0", letra);
    } else if (posicion == 1) {
        mostrarTexto("div1", letra);
    } else if (posicion == 2) {
        mostrarTexto("div2", letra);
    } else if (posicion == 3) {
        mostrarTexto("div3", letra);
    } else if (posicion == 4) {
        mostrarTexto("div4", letra);
    }
}

validar = function (letra) {
    let letraDePalabra;
    for (let i = 0; i < palabraSecreta.length; i++) {
        letraDePalabra = palabraSecreta.charAt(i)
        if (letraDePalabra == letra) {
            mostrarLetra(letra, i)
            letrasEncontradas++
            coincidencias++
            letrasEncontradas=intentos
        }
    }
    if (letrasEncontradas != intentos) {
        letrasEncontradas==intentos+1
        alert("LA LETRA NO ES PARTE DE LA PALABRA")
        errores++
    }
}

ingresarLetra = function () {
    let letra = recuperarTexto("txtLetra")
    intentos++
    if (letra.charCodeAt(0) >= 65 && letra.charCodeAt(0) <= 90 && letra.length == 1) {
        validar(letra);
        if (coincidencias == 5) {
            alert("HA GANADO")
        }
        if (intentos == 10) {
            alert("HA PERDIDO")
        }
    } else {
        alert("SOLO SE ACEPTA UNA MAYUSCULA")
        letrasEncontradas++
    }
    mostrarAhorcado()
}

mostrarAhorcado = function(){
    if (errores==1){
        mostrarImagen("ahorcadoImagen","Ahorcado_01.png")
    }else if (errores==2){
        mostrarImagen("ahorcadoImagen","Ahorcado_02.png")
    }else if (errores==3){
        mostrarImagen("ahorcadoImagen","Ahorcado_03.png")
    }else if (errores==4){
        mostrarImagen("ahorcadoImagen","Ahorcado_04.png")
    }else if (errores==5){
        mostrarImagen("ahorcadoImagen","Ahorcado_05.png")
    }else if (errores==6){
        mostrarImagen("ahorcadoImagen","Ahorcado_06.png")
    }else if (errores==7){
        mostrarImagen("ahorcadoImagen","Ahorcado_07.png")
    }else if (errores==8){
        mostrarImagen("ahorcadoImagen","Ahorcado_08.png")
    }else if (errores==9){
        mostrarImagen("ahorcadoImagen","Ahorcado_09.png")
    }
}