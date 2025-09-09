function obtenerProvincia(placa) {
    primeraLetra = placa.charAt(0);

    if (primeraLetra == 'A') {
        return "Azuay"
    } else if (primeraLetra == 'B') {
        return "Bolívar"
    } else if (primeraLetra == 'U') {
        return "Cañar"
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
        return "Galápagos"
    } else if (primeraLetra == 'G') {
        return "Guayas"
    } else if (primeraLetra == 'I') {
        return "Imbabura"
    } else if (primeraLetra == 'L') {
        return "Loja"
    } else if (primeraLetra == 'R') {
        return "Los Ríos"
    } else if (primeraLetra == 'M') {
        return "Manabí"
    } else if (primeraLetra == 'V') {
        return "Morona Santiago"
    } else if (primeraLetra == 'N') {
        return "Napo"
    } else if (primeraLetra == 'S') {
        return "Pastaza"
    } else if (primeraLetra == 'P') {
        return "Pichincha"
    } else if (primeraLetra == 'K') {
        return "Sucumbíos"
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