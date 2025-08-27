calcularValorDescuento=function(monto,porcentaje){
    let valorDesc=(monto*porcentaje)/100
    return valorDesc
}

calcularIva=function(monto){
    let valorIva=monto*0.12
    return valorIva
}

calcularSubtotal=function(precio,cantidad){
    let sub=precio*cantidad
    return sub
}

calcularTotal=function(subtotal, descuento, iva){
    let total=subtotal-descuento+iva
    return total
}


