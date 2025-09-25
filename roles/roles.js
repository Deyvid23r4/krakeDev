let esNuevo = false;
let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1734567890", nombre: "Pedro", apellido: "Ramirez", sueldo: 800.0 }
]
//funciones de roles

calcularRol = function () {
    let sueldo = recuperarFloatDiv("infoSueldo")
    let descuento = recuperarFloat("txtDescuentos")
    if (descuento >= 0 && descuento <= sueldo) {
        let aporte = calcularAporteEmpleado(sueldo);
        let valorPagar = calcularValorAPagar(sueldo, aporte, descuento);
        mostrarTexto("infoIESS", aporte);
        mostrarTexto("infoPago", valorPagar);
        mostrarTexto("lblErrorDescuentos", "");
    } else {
        mostrarTexto("lblErrorDescuentos", "INGRESE UN DESCUENTO ENTRE 0 Y " + sueldo);
    }
}

calcularValorAPagar = function (sueldo, aporteIess, descuento) {
    let valorAPagar = sueldo - aporteIess;
    valorAPagar = valorAPagar - descuento;
    return valorAPagar
}

calcularAporteEmpleado = function (sueldo) {
    let aporte = sueldo * 0.0945;
    return aporte
}

buscarPorRol = function () {
    let buscar = recuperarTexto("txtBusquedaCedulaRol")
    let empleadoEncontrado = buscarEmpleado(buscar)
    if (empleadoEncontrado != null) {
        mostrarTexto("infoCedula", empleadoEncontrado.cedula)
        mostrarTexto("infoNombre", empleadoEncontrado.nombre + " " + empleadoEncontrado.apellido)
        mostrarTexto("infoSueldo", empleadoEncontrado.sueldo)
    } else {
        alert("EL EMPLEADO NO EXISTE")
    }
}

//funciones de empleado
ejecutarBusqueda = function () {
    let cedulaBuscar = recuperarTexto("txtBusquedaCedula");
    let empleadoRecuperado = buscarEmpleado(cedulaBuscar);
    if (empleadoRecuperado == null) {
        alert("EMPLEADO NO EXISTE")
    } else {
        mostrarTextoEnCaja("txtCedula", empleadoRecuperado.cedula);
        mostrarTextoEnCaja("txtNombre", empleadoRecuperado.nombre);
        mostrarTextoEnCaja("txtApellido", empleadoRecuperado.apellido);
        mostrarTextoEnCaja("txtSueldo", empleadoRecuperado.sueldo);

        deshabilitarComponente("txtCedula");
        habilitarComponente("txtNombre");
        habilitarComponente("txtApellido");
        habilitarComponente("txtSueldo");
        habilitarComponente("btnGuardar");
    }
}

guardar = function () {
    let seAgrego = false
    cedula = recuperarTexto("txtCedula");
    nombre = recuperarTexto("txtNombre");
    apellido = recuperarTexto("txtApellido");
    sueldo = recuperarFloat("txtSueldo");
    cedulaEsValida = false;
    nombreEsValido = false;
    apellidoEsValido = false;
    sueldoEsValido = false;

    if (cedula.length == 10) {
        let digitosEncontrados = 0;
        mostrarTexto("lblErrorCedula", "")
        for (let i = 0; i < cedula.length; i++) {
            let caracter = cedula.charAt(i);
            let codigo = caracter.charCodeAt(0);
            if (codigo >= 48 && codigo <= 57) {
                digitosEncontrados++
            }
        }
        if (digitosEncontrados == cedula.length) {
            cedulaEsValida = true
            mostrarTexto("lblErrorCedula", "")
        } else {
            mostrarTexto("lblErrorCedula", "La cedula debe tener solo digitos")
        }
    } else {
        mostrarTexto("lblErrorCedula", "Ingrese solo 10 digitos")
    }

    if (nombre.length >= 3) {
        let caracteresEncontrados = 0;
        mostrarTexto("lblErrorNombre", "")
        for (let i = 0; i < nombre.length; i++) {
            let caracter = nombre.charAt(i);
            let codigo = caracter.charCodeAt(0);
            if (codigo >= 65 && codigo <= 90) {
                caracteresEncontrados++
            }
        }
        if (caracteresEncontrados == nombre.length) {
            nombreEsValido = true
            mostrarTexto("lblErrorNombre", "")
        } else {
            mostrarTexto("lblErrorNombre", "El nombre debe ser solo en mayusculas")
        }
    } else {
        mostrarTexto("lblErrorNombre", "Ingrese 3 caracteres min")
    }

    if (apellido.length >= 3) {
        let caracteresEncontrados = 0;
        mostrarTexto("lblErrorApellido", "")
        for (let i = 0; i < apellido.length; i++) {
            let caracter = apellido.charAt(i);
            let codigo = caracter.charCodeAt(0);
            if (codigo >= 65 && codigo <= 90) {
                caracteresEncontrados++
            }
        }
        if (caracteresEncontrados == apellido.length) {
            apellidoEsValido = true
            mostrarTexto("lblErrorApellido", "")
        } else {
            mostrarTexto("lblErrorApellido", "El apellido debe ser solo en mayusculas")
        }
    } else {
        mostrarTexto("lblErrorApellido", "Ingrese 3 caracteres min")
    }

    if (isNaN(sueldo)) {
        mostrarTexto("lblErrorSueldo", "Debe ingresar un valor")
    } else {
        if (sueldo >= 400 && sueldo <= 5000) {
            mostrarTexto("lblErrorSueldo", "")
            sueldoEsValido = true
        } else {
            mostrarTexto("lblErrorSueldo", "Ingrese un valor entre 400 y 5000")
        }
    }
    let crearEmpleado = { cedula: cedula, nombre: nombre, apellido: apellido, sueldo: sueldo }
    if (cedulaEsValida === true && nombreEsValido === true && apellidoEsValido === true && sueldoEsValido === true) {
        if (esNuevo === true) {
            seAgrego = agregarEmpleado(crearEmpleado)
        }
        if (seAgrego === true) {
            mostrarEmpleado();
            alert("EMPLEADO GUARDADO CORRECTAMENTE");
            desabilitarCajasYGuardar();
            esNuevo = false;
        } else {
            alert("YA EXISTE EL EMPLEADO CON LA CEDULA: " + cedula)
            let empleadoRecuperado = buscarEmpleado(crearEmpleado.cedula);
            empleadoRecuperado.nombre = crearEmpleado.nombre;
            empleadoRecuperado.apellido = crearEmpleado.apellido;
            empleadoRecuperado.sueldo = crearEmpleado.sueldo;
            alert("EMPLEADO MODIFICADO EXITOSAMENTE");
            mostrarEmpleado();
        }
    }

}

agregarEmpleado = function (empleado) {
    let empleadoEncontrado = buscarEmpleado(empleado.cedula)
    if (empleadoEncontrado === null) {
        let nuevoEmpleado = {};
        nuevoEmpleado.cedula = empleado.cedula;
        nuevoEmpleado.nombre = empleado.nombre;
        nuevoEmpleado.apellido = empleado.apellido;
        nuevoEmpleado.sueldo = empleado.sueldo;
        empleados.push(nuevoEmpleado)
        return true
    } else {
        return false
    }
}

buscarEmpleado = function (cedula) {
    let empleadoBuscado = "";
    let empleadosIguales = 0;
    for (let i = 0; i < empleados.length; i++) {
        empleadoBuscado = empleados[i];
        if (empleadoBuscado.cedula === cedula) {
            empleadosIguales++
            if (empleadosIguales == 1) {
                break
            }
        }
    }
    if (empleadosIguales == 0) {
        esNuevo = true
        return null
    } else {
        esNuevo = false;
        return empleadoBuscado
    }
}

mostrarEmpleado = function () {
    let empleadosencontrados
    let cmptabla = document.getElementById("tablaEmpleados")
    let contenidoTabla = "<table><tr><th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>APELLIDO</th>" +
        "<th>SUELDO</th></tr>"
    for (let i = 0; i < empleados.length; i++) {
        empleadosencontrados = empleados[i]
        contenidoTabla += "<tr>" +
            "<td>" + empleadosencontrados.cedula + "</td>" +
            "<td>" + empleadosencontrados.nombre + "</td>" +
            "<td>" + empleadosencontrados.apellido + "</td>" +
            "<td>" + empleadosencontrados.sueldo + "</td></tr>"
    }
    contenidoTabla += "</table>"
    cmptabla.innerHTML = contenidoTabla
    desabilitarCajasYGuardar()
}

ejecutarNuevo = function () {
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    esNuevo = true;
}

desabilitarCajasYGuardar = function () {
    deshabilitarComponente('txtCedula');
    deshabilitarComponente('txtNombre');
    deshabilitarComponente('txtApellido');
    deshabilitarComponente('txtSueldo');
    deshabilitarComponente('btnGuardar');
}

mostrarOpcionEmpleado = function () {
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleado()
}
mostrarOpcionRol = function () {
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
}
mostrarOpcionResumen = function () {
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
}

limpiar = function () {
    mostrarTextoEnCaja("txtCedula", "");
    mostrarTextoEnCaja("txtNombre", "");
    mostrarTextoEnCaja("txtApellido", "");
    mostrarTextoEnCaja("txtSueldo", "");
    mostrarTextoEnCaja("txtBusquedaCedula", "");

    esNuevo = false

    deshabilitarComponente('txtCedula');
    deshabilitarComponente('txtNombre');
    deshabilitarComponente('txtApellido');
    deshabilitarComponente('txtSueldo');
    deshabilitarComponente('btnGuardar');

}