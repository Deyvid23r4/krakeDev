esMayuscula = function (caracter) {
    caracter = caracter.charCodeAt(0)
    if (caracter >= 65 && caracter <= 90) {
        return true
    } else {
        return false
    }
}

esMinuscula = function (caracter) {
    caracter = caracter.charCodeAt(0);
    if (caracter >= 97 && caracter <= 121) {
        return true;
    }
    if (caracter >= 160 && caracter <= 163) {
        return true;
    }
    else {
        return false;
    }
}

esDigito = function (caracter) {
    caracter = caracter.charCodeAt(0)
    if (caracter >= 48 && caracter <= 57) {
        return true
    } else {
        return false
    }
}

esCaracterEspecial = function (caracter) {
    caracter = caracter.charCodeAt(0)
    if (caracter===42||caracter===45||caracter===95) {
        return true
    }else {
        return false
    }
}