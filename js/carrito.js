let concatProductos = cargarTazasLS().concat(cargarCuencosLS()).concat(cargarMatesLS());

function buscarProducto(id) {
    let productos = concatProductos;

    return productos.find(x => x.id == id);
}

function cargarProductosCarrito() {
    if (localStorage.getItem("carrito")) {
        return JSON.parse(localStorage.getItem("carrito"));
    }

    return [];
}

function hola(){
    console.log("hola hola")
}

function agregarAlCarrito(id) {
    console.log("gdghdshgjds")
    let productos_carrito = cargarProductosCarrito();
    const posicion_carrito = productos_carrito.findIndex(elemento => elemento.id == id);

    if (posicion_carrito === -1) {
        const producto = buscarProducto(id);
        producto.cantidad = 1;
        productos_carrito.push(producto);
    } else {
        productos_carrito[posicion_carrito].cantidad += 1;
    }    

    localStorage.setItem("carrito", JSON.stringify(productos_carrito));
}