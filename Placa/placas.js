validarPlaca = function () {
    let placa = recuperarTexto("lblPlaca")
    let errorEstructura = validarEstructura(placa)
    let provincia = obtenerProvincia(placa)
    if (errorEstructura === null) {
        mostrarTexto("lblValidar", " VALIDA")
        mostrarTexto("lblMensaje", "NINGUNO")
        if (provincia != null) {
            mostrarTexto("lblProvincia", provincia)
        } else {
            mostrarTexto("lblProvincia", "PROVINCIA INCORRECTA")
        }
    } else {
        mostrarTexto("lblValidar", " INVALIDA")
        mostrarTexto("lblMensaje", errorEstructura)
        mostrarTexto("lblProvincia", "")
    }
}