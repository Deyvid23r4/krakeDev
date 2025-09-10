let puntosUsuario = 0;
let puntosComputadora = 0;

jugar = function (seleccionado) {
    let elementoPC = generarElemento()
    let imgPC = generarRuta(elementoPC)
    let resultado = determinarGanador(seleccionado, elementoPC)
    mostrarImagen("imgPc", imgPC)
    if (resultado == 0) {
        mostrarTexto("lblResultado", "EMPATE")

    } else if (resultado == 1) {
        mostrarTexto("lblResultado", "GANASTE LA PARTIDA")
        puntosUsuario = puntosUsuario + 1
        mostrarTexto("lblUser", puntosUsuario)

    } else if (resultado == 2) {
        mostrarTexto("lblResultado", "PERDISTE LA PARTIDA")
        puntosComputadora = puntosComputadora + 1
        mostrarTexto("lblPc", puntosComputadora)
    }

    if (puntosUsuario == 5) {
        mostrarTexto("lblResultadoFinal", "HAS GANADO EL JUEGO")
    } else if (puntosComputadora == 5) {
        mostrarTexto("lblResultadoFinal", "EL COMPUTADOR TE HA VENCIDO")
    }
}

limpiar = function () {
    puntosUsuario = 0;
    puntosComputadora = 0;
    mostrarTexto("lblUser", puntosUsuario)
    mostrarTexto("lblPc", puntosComputadora)
    mostrarTexto("lblResultado", "?")
    mostrarImagen("imgPc", "")
    mostrarTexto("lblResultadoFinal", "?")
}