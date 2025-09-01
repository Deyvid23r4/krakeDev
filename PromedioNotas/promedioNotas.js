calcularPromedioNotas=function(){
    let n1=recuperarFloat("n1");
    let n2=recuperarFloat("n2");
    let n3=recuperarFloat("n3");
    let promedio=calcularPromedio(n1,n2,n3);
    promedio=promedio.toFixed(2);
    console.log(promedio)
    if(promedio>0 && promedio<5){
        mostrarImagen("idImg", "./img/reprobado.gif")
    }
    else if(promedio>=5 && promedio<=8){
        mostrarImagen("idImg", "./img/buentrabajo.gif")
    }
    else if(promedio>8 && promedio<=10){
        mostrarImagen("idImg", "./img/exelente.gif")
    }
    else{
        mostrarImagen("idImg", "./img/maldatos.webp")
    }
}
