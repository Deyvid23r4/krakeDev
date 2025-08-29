jugar=function(){
    let aleatorio=lanzarDado();
    cambiarTexto("lblNumero", aleatorio+"    " );
    if (aleatorio>3){
        cambiarTexto("lblTxt1"," ES MAYOR A 3 GANASTE");
    }else{
        cambiarTexto("lblTxt1"," ES MENOR A 3 ESTAS DE MALAS")
    }
}

lanzarDado=function(){
    let random=Math.random()
    random=random*6+1
    random=parseInt(random)
    console.log(random)
    return random
}
