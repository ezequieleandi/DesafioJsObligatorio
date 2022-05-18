const personas = []
const consultas = []
let formulario = document.querySelector ("#formularioId");
let seccionContacto = document.querySelector ("#contacto");
let contenedorContacto = document.querySelector ("#contenedorContacto")
let contactoH2 = document.querySelector ("#contactoH2");
let nombreInput = document.querySelector ("#nombre");
let emailInput = document.querySelector ("#email");
let telefonoInput = document.querySelector ("#telefono");
let consultaInput = document.querySelector ("#ayuda");
let persona
let consulta

class Persona{
    constructor (nombre, email, telefono){
        this.nombre = nombre
        this.email = email
        this.telefono = telefono
    }
}
class Consulta{
    constructor (nombre, telefono, consulta){
        this.nombre = nombre
        this.telefono = telefono
        this.consulta = consulta
    }
}

function ingresoFormulario(e){
    e.preventDefault();
    persona = new Persona (nombreInput.value, emailInput.value, telefonoInput.value)
    consulta = new Consulta (nombreInput.value, telefonoInput.value, consultaInput.value)
    personas.push (persona)
    consultas.push (consulta)
    formulario.remove()
    contactoH2.remove()
    contenedorContacto.innerHTML = `<p class="contactoContent">${nombreInput.value} MUCHAS GRACIAS</p>
    <p class="contactoContent">Hemos tomado su consulta</p>
    <p class="contactoContent">Pronto nos estarmenos comunicando al numero: ${telefonoInput.value}</p>`
}

formulario.addEventListener ("submit", ingresoFormulario)