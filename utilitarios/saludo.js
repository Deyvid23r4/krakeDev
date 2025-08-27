saludar=function(){
    let nombre=recuperarTexto("idNombre");
    let apellido=recuperarTexto("idApellido");
    let edad=recuperarInt("idEdad");
    let estatura=recuperarFloat("idEstatura");
    let mensaje="mi nombre es "+ nombre+" "+apellido+" tengo "+ edad+" anios y mido "+estatura+" m."
    mostrarTexto("txtResultado",mensaje);
    mostrarImg("idImg", "./imagenes/saludo.gif")
    mostrarTxtEnCaja("idNombre","")

}