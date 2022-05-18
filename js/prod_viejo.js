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
const carritoProducto = [];

//variables inicializadas
let nombre
let apellido
let telefono
let consulta
let correo

//clases constructoras
class ProductoElegido{
    constructor (objeto, estilo, precio){
        this.objeto = objeto;
        this.estilo = estilo;
        this.precio = precio;
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

function mostrarProducto(){
    let salida = "";
    for (let producto of productos){
        salida += producto.id + "- Producto: " + producto.objeto + " Estilo: " + producto.linea + " Precio: $" + producto.precio + "\n"
    }
    return salida
}

function comprarProducto(){
    let salida = ""
    while(salida != "ESC"){
        let listaProductos = mostrarProducto()
        let productoSeleccionado = parseInt(prompt("Ingrese el producto que quiere:\n\n " + listaProductos))
        let producto = productos[(productoSeleccionado - 1)]
        agregarCarrito(producto);
        salida = prompt("Desea elegir otro producto? Escriba ESC para salir").toUpperCase()
    }
}

function agregarCarrito(modelo){
    carritoProducto.push(modelo)
}

function mostrarCarrito(){
    let salida = "";
    let totalPagar = 0;
    for (let carrito of carritoProducto){
        salida +="-nombre: " + carrito.objeto + "  Pecio: " + carrito.precio + "\n";
        totalPagar += parseFloat(carrito.precio);
    }
    salida += "Total a pagar: $" + totalPagar;
    alert(salida)
}

let decision = prompt("Bienvenido a Barronativo " + "¿Desea comprar o consultar?").toLowerCase();

if (decision == "comprar"){
    comprarProducto()
    mostrarCarrito()
}else{
    nombreCompleto();
    consultar();
}