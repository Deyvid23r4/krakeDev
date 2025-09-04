calcularValorTotal = function () {
    let nombreProducto;
    let precioProducto;
    let cantidad;

    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;
    let existeError = false;

    nombreProducto = recuperarTexto("txtProducto");
    esProductoValido(nombreProducto, "lblError1")
    cantidad = recuperarInt("txtCantidad");
    esCantidadValida(cantidad, "lblError2")
    precioProducto = recuperarFloat("txtPrecio");
    esPrecioValido(precioProducto, "lblError3")

    if (esProductoValido(nombreProducto, "lblError1") && esCantidadValida(cantidad, "lblError2") && esPrecioValido(precioProducto, "lblError3")) {

        valorSubtotal = calcularSubtotal(precioProducto, cantidad)
        mostrarTexto("lblSubtotal", valorSubtotal)
        valorDescuento = calcularDescuentoPorVolumen(valorSubtotal, cantidad)
        mostrarTexto("lblDescuento", valorDescuento)
        valorIVA = calcularIva(valorSubtotal - valorDescuento)
        mostrarTexto("lblValorIVA", valorIVA)
        valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA)
        mostrarTexto("lblTotal", valorTotal)
    } else {
        mostrarTexto("lblSubtotal", "0.0")
        mostrarTexto("lblDescuento", "0.0")
        mostrarTexto("lblValorIVA", "0.0")
        mostrarTexto("lblTotal", "0.0")
    }

}

esProductoValido = function (producto, lblError1) {
    let hayErrores = false;
    if (producto === "") {
        mostrarTexto(lblError1, "CAMPO OBLIGATORIO")
        hayErrores = true;
    } if (producto.length > 10) {
        mostrarTexto(lblError1, "VALOR MAX 10 CARACTERES");
        hayErrores = true
    }
    if (hayErrores === false) {
        mostrarTexto(lblError1, "");
    }
    return !hayErrores;
}

esCantidadValida = function (cantidad, lblError2) {
    let hayErrores = false;
    if (isNaN(cantidad)) {
        mostrarTexto(lblError2, "CAMPO OBLIGATORIO")
        hayErrores = true;
    } if (cantidad < 0 || cantidad > 100) {
        mostrarTexto(lblError2, "EL VALOR DEBE ESTAR ENTRE 0 Y 100");
        hayErrores = true
    }
    if (hayErrores === false) {
        mostrarTexto(lblError2, "");
    }
    return !hayErrores;
}

esPrecioValido = function (precio, lblError3) {
    let hayErrores = false;
    if (isNaN(precio)) {
        mostrarTexto(lblError3, "CAMPO OBLIGATORIO")
        hayErrores = true;
    } if (precio < 0 || precio > 50) {
        mostrarTexto(lblError3, "EL VALOR DEBE ESTAR ENTRE 0 Y 50");
        hayErrores = true
    }
    if (hayErrores === false) {
        mostrarTexto(lblError3, "");
    }
    return !hayErrores;
}



limpiar = function () {

    mostrarTextoEnCaja("txtProducto", "")
    mostrarTextoEnCaja("txtCantidad", "")
    mostrarTextoEnCaja("txtPrecio", "")
    mostrarTexto("lblSubtotal", "0.0")
    mostrarTexto("lblDescuento", "0.0")
    mostrarTexto("lblValorIVA", "0.0")
    mostrarTexto("lblTotal", "0.0")
    mostrarTexto("lblError1", "")
    mostrarTexto("lblError2", "")
    mostrarTexto("lblError3", "")
}