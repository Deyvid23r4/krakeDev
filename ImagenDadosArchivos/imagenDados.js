let puntos=0;
let lanzaminetos=5;
jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
    mostrarCara(resultado);
    modificarPuntos(resultado);
    modificarLanzamientos();
}

modificarPuntos=function(dado){
    puntos=puntos+dado;
    cambiarTexto("lblPuntos", puntos)
    if (puntos>20){
        cambiarTexto("resultado", "GANASTE")
        limpiarWin()
    }
}
modificarLanzamientos=function(){
    lanzaminetos=lanzaminetos-1
    cambiarTexto("lblLanzamientos", lanzaminetos)
    if (lanzaminetos==0){
        cambiarTexto("resultado", "GAME OVER")
        limpiarLose()
    }
}

limpiarLose=function(){
    puntos=0;
    lanzaminetos=5;
    cambiarTexto("lblLanzamientos",lanzaminetos);
    cambiarTexto("lblPuntos", puntos);
    cambiarImagen("idImg", "");
}
limpiarWin=function(){
    puntos=0;
    lanzaminetos=6;
    cambiarTexto("lblLanzamientos",lanzaminetos);
    cambiarTexto("lblPuntos", puntos);
    cambiarImagen("idImg", "");
}
//funcion mostrar cara
mostrarCara=function(num){
    if(num == 1){
        cambiarImagen("idImg", "dados1.png")
    }else if(num==2){
        cambiarImagen("idImg", "dados2.png")
    }else if(num==3){
        cambiarImagen("idImg", "dados3.png")
    }else if(num==4){
        cambiarImagen("idImg", "dados4.png")
    }else if(num==5){
        cambiarImagen("idImg", "dados5.png")
    } else if(num==6){
        cambiarImagen("idImg", "dados6.png")
    } 
}
lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado; 
}