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
    mostrarNotas()
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
    mostrarTexto("lblPromedio", promedio)
}

generarTabla = function () {
    let contenidoTabla = "";
    let cmpTabla = document.getElementById("table")
    contenidoTabla += "<table><tr><td>UNO</td></tr>" + "<tr><td>DOS</td></tr></table>"
    cmpTabla.innerHTML = contenidoTabla
}

mostrarNotas = function () {
    let contenidoTabla = "";
    let cmpTabla = document.getElementById("table")
    let miNota
    contenidoTabla += "<table><tr><th>NOTAS</th></tr>"
    for (let i = 0; i < notas.length; i++) {
        miNota = notas[i];
        contenidoTabla += "<tr><td>"
        contenidoTabla += miNota
        contenidoTabla += "</td></tr>"
    }
    contenidoTabla += "</table>"

    cmpTabla.innerHTML = contenidoTabla
}