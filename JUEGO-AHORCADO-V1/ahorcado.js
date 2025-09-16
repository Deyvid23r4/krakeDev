//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
esMayuscula=function(caracter){
    let caracterAscii=caracter.charCodeAt(0)
    if (caracterAscii>=65 || caracterAscii<=90){
        return true
    }else{
        return false
    }
}