let personas = [
    { nombre: "Marcos", edad: 18 },
    { nombre: "Roberto", edad: 15 },
    { nombre: "Kate", edad: 25 },
    { nombre: "Diana", edad: 12 },
    { nombre: "Benja", edad: 15 },
]
let nombreEsValido = false;
let edadEsValida = false;

agregarPersona = function () {
    let nombre = recuperarTexto("txtNombre");
    let edad = recuperarInt("txtEdad");
    if (nombre.length < 3) {
        mostrarTexto("lblError1", "El nombre debe tener 3 caracteres minimo");
        nombreEsValido = false
    } else {
        mostrarTexto("lblError1", "");
        nombreEsValido = true
    }
    if (edad < 0 || edad > 100) {
        mostrarTexto("lblError2", "Debe ingresar una edad entre 0 y 100 años");
        edadEsValida = false
    } else {
        mostrarTexto("lblError2", "");
        edadEsValida = true
    }
    if (edadEsValida == true && nombreEsValido == true) {
        let nuevaPersona = {};
        nuevaPersona.nombre = nombre,
            nuevaPersona.edad = edad,
            personas.push(nuevaPersona)
        alert("PERSONA AGREGADA CORRECTAMENTE");
        mostrarPersonas()
    }
}

mostrarPersonas = function () {
    let cmpTabla = document.getElementById("tablaOrden");
    let contenidoTabla = "<table><tr>" +
        "<th>EDAD</th>" +
        "<th>NOMBRE</th></tr>"
    for (let i = 0; i < personas.length; i++) {
        let personaEncontrada = personas[i]
        contenidoTabla += "<tr>" +
            "<td>" + personaEncontrada.edad + "</td>" +
            "<td>" + personaEncontrada.nombre + "</td></tr>"
    }
    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla
}

determinarMayor=function(){
let personaMayor=encontrarMayor()
mostrarTexto("mayor",personaMayor.nombre+" "+personaMayor.edad+" ")
}

encontrarMayor = function () {
    let personaMayor = personas[0];
    for (let i = 1; i < personas.length; i++) {
        let elementoPersona = personas[i]
        console.log(elementoPersona.nombre+" "+elementoPersona.edad)
        if (personaMayor.edad < elementoPersona.edad) {
            personaMayor=elementoPersona
        }
    }
    return personaMayor
}

determinarMenor=function(){
let personaMenor=encontrarMenor()
mostrarTexto("menor",personaMenor.nombre+" "+personaMenor.edad+" ")
}

encontrarMenor = function () {
    let personaMenor = personas[0];
    for (let i = 1; i < personas.length; i++) {
        let elementoPersona = personas[i]
        console.log(elementoPersona.nombre+" "+elementoPersona.edad)
        if (personaMenor.edad > elementoPersona.edad) {
            personaMenor=elementoPersona
        }
    }
    return personaMenor
}