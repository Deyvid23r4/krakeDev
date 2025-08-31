calcularPromedioNotas=function(){
    let n1=recuperarFloat("n1");
    let n2=recuperarFloat("n2");
    let n3=recuperarFloat("n3");
    let promedio=calcularPromedio(n1,n2,n3);
    promedio=promedio.toFixed(2);
    console.log(promedio)
    if(promedio>7){
        mostrarImagen("idImg", "exelente.gif")
    }
    else{
        mostrarImagen("idImg", "fail.gif")
    }
}
