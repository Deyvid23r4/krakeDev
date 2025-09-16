mostrarTxtEnCaja=function(idComponente, mensaje){
    let componente=document.getElementById(idComponente);
    componente.value=mensaje
}

mostrarImg=function(idComponente, newImg){
    let componente=document.getElementById(idComponente);
    componente.src=newImg;
}

mostrarTexto=function(idComponente, mensaje){
    let componente=document.getElementById(idComponente);
    componente.innerText=mensaje;
}

recuperarTexto=function(idComponente){
    let valorCaja=document.getElementById(idComponente);
    let txt=valorCaja.value
    return txt
}

recuperarInt=function(idComponente){
    let valorCaja=recuperarTexto(idComponente);
    let valorEntero=parseInt(valorCaja);
    return valorEntero
}

recuperarFloat=function(idComponente){
    let valorCaja=recuperarTexto(idComponente)
    let valorFlotante=parseFloat(valorCaja) 
    return valorFlotante
}