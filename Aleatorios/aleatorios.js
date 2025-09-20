crearAleatorio = function () {
    let nRandom = Math.random(1, 100)
    nRandom = parseInt(nRandom * 100 + 1)
    return nRandom
}

generarAleatorios = function () {
    let aleatorios = [];
    let cmpNum = recuperarInt("txtUser")
    if (cmpNum >= 5 && cmpNum <= 20) {
        for (let i = 0; i < cmpNum; i++) {
            aleatorios.push(i)
            let aleatorios2 = crearAleatorio()
            aleatorios.push(aleatorios2)
        }
        console.log(aleatorios)
    }
    mostrarResultados(aleatorios)
}

mostrarResultados = function (arregloNumeros) {
    let contenidoTabla = "<table><tr><th>ALEATORIOS</th></tr>"
    let cmptabla = document.getElementById("tabla")
    for (let i = 0; i < arregloNumeros.length; i++) {
        let numero = arregloNumeros[i]
        contenidoTabla += "<tr><td>"
        contenidoTabla += numero
        contenidoTabla += "</tr></td>"
    }

    contenidoTabla += "</table>"
    cmptabla.innerHTML = contenidoTabla
}