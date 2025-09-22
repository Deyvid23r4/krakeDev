probarAtributos = function () {
    let persona = {
        nombre: "Pedro",
        apellido: "Morales",
        edad: 24,
        estaVivo: false
    }
    console.log(persona.nombre);
    console.log(persona.edad);
    if (persona.estaVivo == false) {
        console.log("no esta vivo");
    } else {
        console.log("si esta vivo");
    }
}

crearProducto = function () {
    producto1 = {
        nombre: "Coca Cola",
        precio: 1.50,
        stock: 50,
    }
    producto2 = {
        nombre: "Galleta Oreo",
        precio: 1.00,
        stock: 25,
    }
    console.log(producto1.nombre)
    console.log(producto2.nombre)
    if (producto1.stock === producto2.stock) {
        console.log("el stock de ambos productos es igual")
    }else if (producto1.stock > producto2.stock) {
        console.log("el stock de "+producto1.nombre+" es mayor que el stock de "+producto2.nombre+".")
    }else if (producto1.stock < producto2.stock) {
        console.log("el stock de "+producto2.nombre+" es mayor que el stock de "+producto1.nombre+".")
    }
}