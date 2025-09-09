validarPlaca = function () {
    let placa = recuperarTexto("lblPlaca")
    let errorEstructura = validarEstructura(placa)
    if (errorEstructura === null) {
        mostrarTexto("lblValidar", " VALIDA")
        mostrarTexto("lblMensaje", "NINGUNO")
    } else {
        mostrarTexto("lblValidar", " INVALIDA")
        mostrarTexto("lblMensaje", errorEstructura)
    }
}