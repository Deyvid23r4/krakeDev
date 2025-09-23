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
    } else if (producto1.stock > producto2.stock) {
        console.log("el stock de " + producto1.nombre + " es mayor que el stock de " + producto2.nombre + ".")
    } else if (producto1.stock < producto2.stock) {
        console.log("el stock de " + producto2.nombre + " es mayor que el stock de " + producto1.nombre + ".")
    }
}

modificarAtributos = function () {
    let cuenta = {
        numero: "4513414234",
        saldo: 0.0,
    }
    cuenta.saldo = 100
    cuenta.saldo += 10
    console.log(cuenta.saldo)
}

crearCliente = function () {
    let cliente = {
        cedula: "12313123",
        nombre: "Juan",
    }
    let cliente1 = {};
    cliente1.nombre = "Pedro";
    cliente1.apellido = "Iglesias";
    cliente1.cedula = "12214524";
}

probarIncrementarSaldo = function () {
    let cta = { numero: "213351", saldo: 23.55 }
    incrementaSaldo(cta, 100);
    console.log(cta.saldo);
}

probarDeterminarMayor = function () {
    let per1 = { nombre: "Jose", edad: 4 }
    let per2 = { nombre: "Javier", edad: 32 }
    let mayor;
    mayor = determinaMayor(per1, per2);
    if (mayor != null) {
        console.log("El mayor es: " + mayor.nombre);
    }
}

incrementaSaldo = function (cuenta, monto) {
    cuenta.saldo += monto;

}

determinaMayor = function (persona1, persona2) {
    if (persona1.edad > persona2.edad) {
        return persona1;
    } else if (persona1.edad < persona2.edad) {
        return persona2;
    } else {
        return null;
    }
}