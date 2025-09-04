calcularIva=function(monto){
    let valorIva=monto*0.12
    return valorIva
}

calcularSubtotal=function(precio,cantidad){
    let sub=precio*cantidad
    return sub
}

calcularTotal=function(subtotal, descuento, iva){
    let total=iva+subtotal-descuento
    return total
}

calcularDescuentoPorVolumen=function(subtotal,cantidad){
    if(cantidad<3){
        return 0
    }else if(cantidad>=3&&cantidad<=5){
        return subtotal*0.03
    }else if(cantidad>=6&&cantidad<=11){
        return subtotal*0.04
    }else{
        return subtotal*0.05
    }
}


