saludar=function(){
    let nombre=recuperarTexto("idNombre");
    let apellido=recuperarTexto("idApellido");
    console.log (nombre, apellido)
}

recuperarTexto=function(id){
    let nombre=document.getElementById(id);
    nombre=nombre.value
    return nombre
}