let notas = []

agregarElementos = function () {
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}

recorrerArreglo = function () {
    let notaR
    for (let indice = 0; indice < notas.length; indice++) {
        notaR = notas[indice]
        console.log(notaR)
    }
}

probarAgregar = function () {
    let notaRecuperada = recuperarInt("txtNotas")
    agregarNota(notaRecuperada)
}

agregarNota = function (nota) {
    notas.push(nota)
}

calcularPromedio = function () {
    let sumaNota = 0;
    let promedio;
    for (i = 0; i < notas.length; i++) {
        sumaNota = sumaNota + notas[i]
    }
    promedio = sumaNota / notas.length
    return promedio
}

ejecutarPromedio = function () {
    let promedio = calcularPromedio()
    mostrarTexto("lblPromedio",promedio)
}