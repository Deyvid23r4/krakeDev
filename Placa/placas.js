validarPlaca = function () {
    let placa = recuperarTexto("lblPlaca")
    let errorEstructura = validarEstructura(placa)
    let provincia = obtenerProvincia(placa)
    let tipo = obtenerTipoVehiculo(placa)
    let pico = obtenerDiaPicoYPlaca(placa)
    if (errorEstructura === null) {
        mostrarTexto("lblValidar", " VALIDA")
        mostrarTexto("lblMensaje", "NINGUNO")
        if (provincia != null) {
            mostrarTexto("lblProvincia", provincia)
            mostrarTexto("lblTipo", tipo)
            mostrarTexto("lblPico", pico)
        } else {
            mostrarTexto("lblProvincia", "PROVINCIA INCORRECTA")
        }

    } else {
        mostrarTexto("lblValidar", " INVALIDA")
        mostrarTexto("lblMensaje", errorEstructura)
        mostrarTexto("lblProvincia", "")
        mostrarTexto("lblTipo", "")
        mostrarTexto("lblPico", "")
    }
}

limpiar = function () {
    mostrarTextoEnCaja("lblPlaca", "")
    mostrarTexto("lblValidar","")
    mostrarTexto("lblMensaje","")
    mostrarTexto("lblProvincia","")
    mostrarTexto("lblTipo", "")
    mostrarTexto("lblPico", "")
}