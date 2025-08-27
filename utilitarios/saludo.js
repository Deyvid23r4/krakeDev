saludar=function(){
    let nombre=recuperarTexto("idNombre");
    let apellido=recuperarTexto("idApellido");
    let edad=recuperarInt("idEdad")
    let estatura=recuperarFloat("idEstatura")
    console.log ("hola "+nombre, apellido, edad, estatura)
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