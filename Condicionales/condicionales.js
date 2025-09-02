caclularTasaInteres=function(ingresoAnual){
    if (ingresoAnual<300000){
        return 16
    }else if (ingresoAnual>=300000 && ingresoAnual<500000){
        return 15
    }else if (ingresoAnual>=500000 && ingresoAnual<1000000){
        return 14
    }else if (ingresoAnual>=1000000 && ingresoAnual<2000000){
        return 13
    }else{
        return 12
    }
}

calcularCapacidadPago=function(edad, ingresos, egresos){
    if (edad>50){
        return (ingresos- egresos)*0.30
    }else {
        return (ingresos- egresos)*0.40
    }
}

calcularDescuento=function(precio, cantidad){
    if (cantidad<3){
        return precio*cantidad
    }else if (cantidad>=3 && cantidad<=5){
        return (precio*cantidad)-(precio*cantidad)*0.02
    }else if (cantidad>=6 && cantidad<=11){
        return (precio*cantidad)-(precio*cantidad)*0.03
    }else if (cantidad>=12){
        return (precio*cantidad)-(precio*cantidad)*0.04
    }
}

determinarColesterolLDL = function(nivelColesterol) {
    if (nivelColesterol < 100) {
        return "Óptimo";
    } else if (nivelColesterol >= 100 && nivelColesterol < 129) {
        return "Casi óptimo";
    } else if (nivelColesterol >= 130 && nivelColesterol < 159) {
        return "Límite superior al normal";
    } else if (nivelColesterol >= 160 && nivelColesterol < 189) {
        return "Alto";
    } else if (nivelColesterol >= 190) {
        return "Muy alto";
    } else {
        return "Nivel de colesterol no válido";
    }
}

validarClave=function(calve){
    if (calve.lenght >=8 && calve.lenght<=16){
        return true
    }else{
        return false
    }
}

esMayuscula=function(caracter){
    caracter=caracter.charCodeAt(0)
    if(caracter>=65 && caracter<=90 || caracter===165){       
        return true
    }else{
        return false
    }
}

esMinuscula = function(caracter){
    caracter = caracter.charCodeAt(0);
    if(caracter >= 97 && caracter <= 121 || caracter===130){
        console.log("si"+caracter) 
        return true;}
    if(caracter>=160 && caracter<=163){
        console.log("si"+ caracter); 
        return true;
    }
    else{
        console.log("no"+caracter) 
        return false;
    }
}

esDigito=function(caracter){
    caracter=caracter.charCodeAt(0)
    if(caracter>=48 && caracter<=57){       
        return true
    }else{
        return false
    }
}

darPermiso=function(notaMatematica,notaFisica,notaGeometria){
    if (notaFisica>90 || notaGeometria>90 || notaMatematica>90){
        return true
    }else{
        return false
    }
}

otorgarPermiso=function(notaMatematica,notaFisica,notaGeometria){
    if (notaGeometria>80 && notaMatematica>90 || notaFisica>90){
        return true
    }else{
        return false
    }
}

dejarSalir=function(notaMatematica,notaFisica,notaGeometria){
    if (notaFisica>90 || notaGeometria>90 || notaMatematica>90 && notaFisica>notaMatematica){
        return true
    }else{
        return false
    }
}