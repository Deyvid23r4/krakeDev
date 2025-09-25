let esNuevo = false;
let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1734567890", nombre: "Pedro", apellido: "Ramirez", sueldo: 800.0 }
]
let rol = [
]

//mostrar totales

mostrarTotales = function () {
    let rolEncontrado;
    let totalEmpleado = 0;
    let totalEmpleador = 0;
    let totalPagar = 0;
    let totalNomina
    for (let i = 0; i < rol.length; i++) {
        rolEncontrado = rol[i]
        totalEmpleado += rolEncontrado.aporteEmpleado;
        totalEmpleador += rolEncontrado.aporteEmpleador;
    }
    totalPagar = totalEmpleado + totalEmpleador
    totalNomina=totalPagar+totalEmpleado+totalEmpleador
    mostrarTexto("infoTotalPago", totalPagar.toFixed(2))
    mostrarTexto("infoAporteEmpresa", totalEmpleador)
    mostrarTexto("infoAporteEmpleado", totalEmpleado)
    mostrarTexto("infoNomina",totalNomina)
}

//funciones de roles

guardarRol = function () {
    let rolNuevo = {}
    let cedula = recuperarTextoDiv("infoCedula");
    let nombre = recuperarTextoDiv("infoNombre");
    let sueldo = recuperarIntDiv("infoSueldo");
    let aporteIess = recuperarFloatDiv("infoIESS");
    let valorAPagar = recuperarFloatDiv("infoPago");
    let aporteEmpleadorCalculado = calcularAporteEmpeador(sueldo);

    rolNuevo.cedula = cedula,
        rolNuevo.nombre = nombre,
        rolNuevo.sueldo = sueldo,
        rolNuevo.valorAPagar = valorAPagar,
        rolNuevo.aporteEmpleado = aporteIess,
        rolNuevo.aporteEmpleador = aporteEmpleadorCalculado,
        agregarRol(rolNuevo);
}

agregarRol = function (rolIngresado) {
    let rolBaucado = buscarRol(rolIngresado.cedula)
    let nuevoRol = {}
    if (rolBaucado == null) {
        nuevoRol.cedula = rolIngresado.cedula,
            nuevoRol.nombre = rolIngresado.nombre,
            nuevoRol.sueldo = rolIngresado.sueldo,
            nuevoRol.valorAPagar = rolIngresado.valorAPagar,
            nuevoRol.aporteEmpleado = rolIngresado.aporteEmpleado,
            nuevoRol.aporteEmpleador = rolIngresado.aporteEmpleador,
            rol.push(nuevoRol);
        alert("SE AGREGO UN ROL NUEVO")
        deshabilitarComponente("botonGuardar")
    }
}

buscarRol = function (cedula) {
    let contarRol = 0;
    let rolEncontrado
    for (let i = 0; i < rol.length; i++) {
        rolEncontrado = rol[i]
        if (rolEncontrado.cedula == cedula) {
            contarRol++
            if (contarRol > 0) {
                break;
            }
        }
    }
    if (contarRol != 0) {
        alert("EL ROL YA EXISTE")
        return (rolEncontrado);

    } else {
        return null;
    }
}

calcularRol = function () {
    let sueldo = recuperarFloatDiv("infoSueldo")
    let descuento = recuperarFloat("txtDescuentos")
    if (descuento >= 0 && descuento <= sueldo) {
        let aporte = calcularAporteEmpleado(sueldo);
        let valorPagar = calcularValorAPagar(sueldo, aporte, descuento);
        mostrarTexto("infoIESS", aporte);
        mostrarTexto("infoPago", valorPagar);
        mostrarTexto("lblErrorDescuentos", "");
        habilitarComponente("botonGuardar");
    } else {
        mostrarTexto("lblErrorDescuentos", "INGRESE UN DESCUENTO ENTRE 0 Y " + sueldo);
    }
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

calcularValorAPagar = function (sueldo, aporteIess, descuento) {
    let valorAPagar = sueldo - aporteIess;
    valorAPagar = valorAPagar - descuento;
    return valorAPagar
}

//calculo de aportes

calcularAporteEmpeador = function (sueldo) {
    let aporteEmpleador = (sueldo * 11.15)/100
    return aporteEmpleador
}

calcularAporteEmpleado = function (sueldo) {
    let aporte = sueldo * 0.0945;
    return aporte
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
// crear tablas de empleado y roles
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

mostrarRoles = function () {
    let empleadoEncontrado
    let cmpTabla = document.getElementById("tablaResumen")
    let contenidoTabla = "<table><tr><th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>VALOR A PAGAR</th>" +
        "<th>APORTE EMPLEADO</th>" +
        "<th>APORTE EMPLEADOR</th></tr>"
    for (let i = 0; i < rol.length; i++) {
        empleadoEncontrado = rol[i];
        contenidoTabla += "<tr>" +
            "<td>" + empleadoEncontrado.cedula + "</td>" +
            "<td>" + empleadoEncontrado.nombre + "</td>" +
            "<td>" + empleadoEncontrado.valorAPagar + "</td>" +
            "<td>" + empleadoEncontrado.aporteEmpleado + "</td>" +
            "<td>" + empleadoEncontrado.aporteEmpleador + "</td></tr>"
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla
}
// abilitar, desabilitar y mostrar complementos pantallas etc..

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
    deshabilitarComponente("botonGuardar");
    mostrarRoles()
}
mostrarOpcionResumen = function () {
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
    mostrarRoles()
    mostrarTotales()
}

//limpiar 

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