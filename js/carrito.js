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

function eliminarCarrito() {
    localStorage.removeItem("carrito");
    actualizarBotonCarrito();
    dibujarProductoEnCarrito();
}

function agregarAlCarrito(id) {
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
    actualizarBotonCarrito()
    dibujarProductoEnCarrito()
    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 1000,
    }) 
    Toast.fire({
        icon: 'success',
        title: 'Producto agregado'
    })
}

function agregarProducto(id) {
    let productos_carrito = cargarProductosCarrito();
    const posicion_carrito = productos_carrito.findIndex(elemento => elemento.id == id);
    productos_carrito[posicion_carrito].cantidad += 1;
    localStorage.setItem("carrito", JSON.stringify(productos_carrito));
    actualizarBotonCarrito();
    cargarProductosSeleccionados();
}

function eliminarProducto(id) {
    let productos_carrito = cargarProductosCarrito();
    const posicion_carrito = productos_carrito.findIndex(elemento => elemento.id == id);
    productos_carrito[posicion_carrito].cantidad -= 1;

    if (productos_carrito[posicion_carrito].cantidad == 0) {
        productos_carrito = productos_carrito.filter(x => x.id != id);
    }
    
    localStorage.setItem("carrito", JSON.stringify(productos_carrito));
    actualizarBotonCarrito();
    dibujarProductoEnCarrito();
}

function actualizarBotonCarrito() {
    let productos_carrito = cargarProductosCarrito();
    let contenido = `<button type="button" class="position-relative"><img src="../imgBarronativo2/carritoImg.svg" alt="Carrito"><span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${productos_carrito.length}</span></button>`;
    document.getElementById("iconoCarrito").innerHTML = contenido;
}

function dibujarProductoEnCarrito(){
    if(document.getElementById("cuerpoCarrito")){
        let cuerpoCarrito = document.getElementById("cuerpoCarrito");
        let productosCarrito = cargarProductosCarrito();
        let contenido = "";
        if(productosCarrito.length === 0){
            contenido = "<p class='text-center p-6'>El carrito de compras esta vacio</p>";
            cuerpoCarrito.innerHTML = contenido
        }else{
            contenido = `<table class="table caption-top table-borderless">
            <thead>
              <tr class="table-dark">
                <th scope="col">#</th>
                <th scope="col">PRODUCTO</th>
                <th scope="col">LINEA</th>
                <th scope="col">PRECIO</th>
                <th scope="col">CANT.</th>
                <th scope="col">SUBTOTAL</th>
                <th scope="col">QUITAR</th>
              </tr>
            </thead>`
          for(const productos of productosCarrito){
              contenido += `<tbody>
              <tr>
                <th scope="row"></th>
                <td>${productos.producto}</td>
                <td>${productos.linea}</td>
                <td>$${productos.precio}</td>
                <td>${productos.cantidad}</td>
                <td>$${productos.precio * productos.cantidad}</td>
                <td><button class='btn' onclick='eliminarProducto(${productos.id});'><img src="../imgBarronativo2/xEliminar.svg" alt='Eliminar' width='24'></button></td>
              </tr>
            </tbody>`
          }
          contenido += `</table>`
          cuerpoCarrito.innerHTML = contenido
        }
    }
}

document.getElementById("iconoTrash").addEventListener("click", eliminarCarrito);