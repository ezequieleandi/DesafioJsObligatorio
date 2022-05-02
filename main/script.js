//variables inicializadas
let nombre
let apellido
let telefono
let consulta
let correo
let aperturaEleccion;
let linea;
let prodcuto;
let pregunta2;

//clases constructoras
class ProductoElegido{
    constructor (objeto, estilo){
        this.objeto = objeto;
        this.estilo = estilo
    }
}
class Cliente{
    constructor (nombre, apellido, telefono, zona){
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.zona = zona
    }
}

//creacion de funciones
function nombreCompleto(){
    nombre = prompt("Ingrese su nombre");
    apellido = prompt("Ingrese su apellido");
}

function saludoCierre(){
    alert("Muchas gracias por enviar la consulta " + nombre + "\nDentro de las 24, 48hs nos contactaremos con usted al telefono: " + telefono + "\nSu consulta fue: " + consulta)
    alert("Consulta enviada")
}

function recibirPromociones(){
    let promociones = prompt("¿Quiere recibir novedades o promociones de Barronativo?").toLowerCase();
    if(promociones == "si"){
        correo = prompt("Ingrese correo electronico");
        saludoCierre();
    }else if(promociones == "no"){
        saludoCierre();
    }
}

function consultar(){
    telefono = prompt(nombre + ", ingrese su celular para poder contactarnos");
    consulta = prompt("Ingrese la consulta");
    recibirPromociones()
}

const datosCliente=()=>{
    let nombreIngresado = prompt ("Ingrese su nombre");
    let apellidoIngresado = prompt ("Ingrese su apellido");
    let telefonoIngresado = prompt ("ingrese un celular para ser contactado");
    let zonaIngresada = prompt ("¿En que barrio de la ciudad vive?");
    let cliente1 = new Cliente (nombreIngresado, apellidoIngresado, telefonoIngresado, zonaIngresada);
    return cliente1;
}

const tipoProductoEleccion=()=>{
    let producto = prompt ("¿Que producto desea elegir? \nTAZA \nMATE \nCUENCO");
    while (producto.toLowerCase() != "taza" && producto.toLowerCase() != "mate" && producto.toLowerCase() != "cuenco"){
        alert ("No tenemos ese producto. Ingrese otro porfavor"); 
        producto = prompt ("¿Que producto desea elegir? \nTAZA \nMATE \nCUENCO"); 
    }
    if (producto.toUpperCase() === "TAZA"){
        linea = prompt ("¿Que estilo le gustaria para su producto? \nAMOR \nCALMA \nEMPATIA");
    }else if (producto.toUpperCase() === "MATE"){
        linea = prompt ("¿Que estilo le gustaria para su producto? \nLIBERTAD \nCALMA \nEMPATIA \nPUREZA");
    }else{
        linea = prompt ("¿Que estilo le gustaria para su producto? \nAMOR \nPAZ \nVIDA");
    }
    carrito.push = (new ProductoElegido (producto, linea));
    alert (carrito)
}

//Arrays
//array de pruductos
const productos = [
    {id:1, objeto: "taza", linea: "amor", precio: 510},
    {id:2, objeto: "taza", linea: "empatia", precio: 580},
    {id:3, objeto: "taza", linea: "calma", precio: 650},
    {id:4, objeto: "cuenco", linea: "paz", precio: 550},
    {id:5, objeto: "cuenco", linea: "amor", precio: 880},
    {id:6, objeto: "cuenco", linea: "vida", precio: 690},
    {id:7, objeto: "mate", linea: "calma", precio: 700},
    {id:8, objeto: "mate", linea: "libertad", precio: 750},
    {id:9, objeto: "mate", linea: "pureza", precio: 510},
    {id:10, objeto: "mate", linea: "empatia", precio: 620}
];
//array vacio de lo que va comprando cliente
const carrito = [];

// nombreCompleto();
while (nombre == "" || apellido == ""){
    alert("No ingreso nombre o apellido")
    nombreCompleto()
}

let decision = prompt("Bienvenido a Barronativo " + nombre + " " + apellido + " ¿Desea comprar o consultar?").toLowerCase();

if (decision == "comprar"){
    datosCliente();
    tipoProductoEleccion();
}else{
    nombreCompleto();
    consultar();
}
