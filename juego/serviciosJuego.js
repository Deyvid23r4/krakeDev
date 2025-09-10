obtenerAleatorio = function () {
    let random = Math.random()
    random = random * 3 + 1
    random = parseInt(random)
    console.log(random)
    return random
}

generarElemento = function () {
    let random = obtenerAleatorio()
    if (random == 1) {
        return "piedra"
    } else if (random == 2) {
        return "papel"
    } else if (random == 3) {
        return "tijera"
    }
}

determinarGanador = function (eleccionJugador1, eleccionJugador2) {
    if (eleccionJugador1 == eleccionJugador2) {
        return 0
    } else if (eleccionJugador1 == "piedra" && eleccionJugador2 == "papel") {
        return 2
    } else if (eleccionJugador1 == "papel" && eleccionJugador2 == "tijera") {
        return 2
    } else if (eleccionJugador1 == "tijera" && eleccionJugador2 == "piedra") {
        return 2
    } else if (eleccionJugador1 == "piedra" && eleccionJugador2 == "tijera") {
        return 1
    } else if (eleccionJugador1 == "papel" && eleccionJugador2 == "piedra") {
        return 1
    } else if (eleccionJugador1 == "tijera" && eleccionJugador2 == "papel") {
        return 1
    }
}

generarRuta = function (nombre) {
    if (nombre == "piedra") {
        return "./imagenes/piedra.png"
    }else if (nombre == "papel") {
        return "./imagenes/papel.png"
    }else if (nombre == "tijera") {
        return "./imagenes/tijera.png"
    }
}