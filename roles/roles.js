let esNuevo = false;
let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1734567890", nombre: "Pedro", apellido: "Ramirez", sueldo: 800.0 }
]

ejecutarNuevo=function(){
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    esNuevo=true;
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


