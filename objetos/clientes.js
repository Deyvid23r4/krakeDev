let clientes = [
    { cedula: "11111111", nombre: "Juan", edad: 20 },
    { cedula: "22222222", nombre: "Mario", edad: 60 },
    { cedula: "33333333", nombre: "Pepe", edad: 40 },
]

guardarCambios = function () {
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorEdad = recuperarInt("txtEdad");
    let datosCliente = {};
    datosCliente.cedula = valorCedula;
    datosCliente.nombre = valorNombre;
    datosCliente.edad = valorEdad;
    modificarCliente(datosCliente);
    mostrarClientes();
    

}
modificarCliente = function (cliente) {
    let clienteEncontrado = buscarCliente(cliente.cedula);
    if (clienteEncontrado != null) {
        clienteEncontrado.nombre = cliente.nombre;
        clienteEncontrado.edad = cliente.edad
    }

}

ejecutarBusqueda = function () {
    let valorCedula = recuperarTexto("txtCedulaBusqueda");
    let cliente = buscarCliente(valorCedula)
    if (cliente === null) {
        alert("cliente no encontrado")
    } else {
        mostrarTxtEnCaja("txtCedula", cliente.cedula);
        mostrarTxtEnCaja("txtNombre", cliente.nombre);
        mostrarTxtEnCaja("txtEdad", cliente.edad);
    }
}

crearCliente = function () {
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorEdad = recuperarInt("txtEdad");

    let nuevoCliente = {};
    nuevoCliente.cedula = valorCedula;
    nuevoCliente.nombre = valorNombre;
    nuevoCliente.edad = valorEdad;

    agregarCliente(nuevoCliente);
    mostrarClientes();
}

agregarCliente = function (cliente) {
    let resultado = buscarCliente(cliente.cedula)
    if (resultado === null) {
        clientes.push(cliente)
        alert("Cliente agregado")
    } else {
        alert("Ya existe el cliente con la cedula: " + cliente.cedula)
    }
}

buscarCliente = function (cedula) {
    let elementoCliente;
    let clienteEncontrado = null;
    for (let i = 0; i < clientes.length; i++) {
        elementoCliente = clientes[i];
        if (elementoCliente.cedula === cedula) {
            clienteEncontrado = elementoCliente;
            break;
        }
    }
    return clienteEncontrado
}

mostrarClientes = function () {
    let cmpTabla = document.getElementById("tabla")
    let contenidoTabla = "<table><tr>" +
        "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>EDAD</th>" +
        "</tr>"
    let elementoCliente
    for (let i = 0; i < clientes.length; i++) {
        elementoCliente = clientes[i]
        contenidoTabla +=
            "<tr><td>" + elementoCliente.cedula + "</td>"
            + "<td>" + elementoCliente.nombre + "</td>"
            + "<td>" + elementoCliente.edad + "</td>"
            + "</tr>"
    }
    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla;
}