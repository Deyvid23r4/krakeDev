mostrarNumeros = function () {
    console.log("antes de for")
    for (let i = 0; i < 4; i++) {
        console.log(i)
    }
    console.log("despues de for")
}

mostrarNumeros2 = function () {
    console.log("antes de for")
    for (let indice = 1; indice <= 5; indice++) {
        console.log(indice);
    }
    console.log("despues de for")
}

mostrarPares = function () {
    console.log("antes de for")
    for (let x = 2; x <= 10; x += 2) {
        console.log(x);
    }
    console.log("despues de for")
}

mostrarInverso = function () {
    console.log("antes de for")
    for (let i = 10; i <= 0; i--) {
        console.log(i);
    }
    console.log("despues de for")
}

hakearNasaPelis = function () {
    console.log("antes de for")
    for (let porcentaje = 0; porcentaje <= 100; porcentaje+=10) {
        console.log("hakeando la nasa: "+porcentaje + "%");
    }
    console.log("despues de for")
}

mostrarImpares = function () {
    console.log("antes de for")
    for (let x = 1; x <= 21; x += 2) {
        console.log(x);
    }
    console.log("despues de for")
}