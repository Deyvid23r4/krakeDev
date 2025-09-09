function obtenerProvincia(placa) {
    primeraLetra = placa.charAt(0);

    if (primeraLetra == 'A') {
        return "Azuay"
    } else if (primeraLetra == 'B') {
        return "Bolivar"
    } else if (primeraLetra == 'U') {
        return "Caniar"
    } else if (primeraLetra == 'C') {
        return "Carchi"
    } else if (primeraLetra == 'X') {
        return "Cotopaxi"
    } else if (primeraLetra == 'H') {
        return "Chimborazo"
    } else if (primeraLetra == 'O') {
        return "El Oro"
    } else if (primeraLetra == 'E') {
        return "Esmeraldas"
    } else if (primeraLetra == 'W') {
        return "Galapagos"
    } else if (primeraLetra == 'G') {
        return "Guayas"
    } else if (primeraLetra == 'I') {
        return "Imbabura"
    } else if (primeraLetra == 'L') {
        return "Loja"
    } else if (primeraLetra == 'R') {
        return "Los Rios"
    } else if (primeraLetra == 'M') {
        return "Manabi"
    } else if (primeraLetra == 'V') {
        return "Morona Santiago"
    } else if (primeraLetra == 'N') {
        return "Napo"
    } else if (primeraLetra == 'S') {
        return "Pastaza"
    } else if (primeraLetra == 'P') {
        return "Pichincha"
    } else if (primeraLetra == 'K') {
        return "Sucumbios"
    } else if (primeraLetra == 'Q') {
        return "Orellana"
    } else if (primeraLetra == 'T') {
        return "Tungurahua"
    } else if (primeraLetra == 'Z') {
        return "Zamora Chinchipe"
    } else if (primeraLetra == 'Y') {
        return "Santa Elena"
    } else {
        return null
    }
}

obtenerTipoVehiculo = function (placa) {
    let segundaLetra = placa.charAt(1)
    if (segundaLetra == 'A' || segundaLetra == 'Z') {
        return "Vehiculo comercial"
    } else if (segundaLetra == 'E') {
        return "Vehiculo gubernamental"
    } else if (segundaLetra == 'X') {
        return "Vehiculo de uso oficial"
    } else if (segundaLetra == 'S') {
        return "Vehiculo de gobierno provincial"
    } else if (segundaLetra == 'M') {
        return "Vehiculo municipal"
    } else {
        return "Vehiculo particular"
    }
}

obtenerDiaPicoYPlaca = function (placa) {
    ultimoDigito = placa.charAt(placa.length-1)
    if (ultimoDigito == 1 || ultimoDigito == 2) {
        return "Lunes"
    }else if (ultimoDigito == 3 || ultimoDigito == 4) {
        return "Martes"
    }else if (ultimoDigito == 5 || ultimoDigito == 6) {
        return "Miercoles"
    }else if (ultimoDigito == 7 || ultimoDigito == 8) {
        return "Jueves"
    }else if (ultimoDigito == 9 || ultimoDigito == 0) {
        return "Viernes"
    }
    
}