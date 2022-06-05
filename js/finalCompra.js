let prodCarrito = cargarProductosCarrito();
let carritoFinal = document.getElementById("prodSeleccionados");
let formuCompra = document.getElementById("formuCompra");
let contenido = "";
let total = 0;
if(prodCarrito.length == 0){
    contenido = "<p class='text-center pOculto'>NO HAY PRODUCTOS SELECCIONADOS PARA COMPRAR</p>";
    carritoFinal.innerHTML = contenido
    formuCompra.innerHTML = "";
}else{
    contenido += `<table class="table caption-top table-borderless tablaCarrito">
    <thead>
        <tr class="table-dark">
            <th scope="col">#</th>
            <th scope="col">PRODUCTO</th>
            <th scope="col">LINEA</th>
            <th scope="col">PRECIO</th>
            <th scope="col">CANT.</th>
            <th scope="col">SUBTOTAL</th>
        </tr>
    </thead>`
    for(const productos of prodCarrito){
        contenido += `<tbody>
        <tr class="itemCarrito">
          <th scope="row"></th>
          <td>${productos.producto}</td>
          <td>${productos.linea}</td>
          <td>$${productos.precio}</td>
          <td>${productos.cantidad}</td>
          <td>$${productos.precio * productos.cantidad}</td>
        </tr>
      </tbody>`
      total += productos.precio * productos.cantidad
    }
    contenido += `<tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td><b>Total a pagar:</b></td>
        <td class="itemCarrito">$${total}</td>
    </tr>`
    contenido += `</table>`
    carritoFinal.innerHTML = contenido
}

function mostrarError(palabra1, palabra2){
    Swal.fire({
        icon: 'error',
        title: 'Error!!!',
        text: 'Complete el campo: ' + palabra1 + palabra2,
    })
}

function validarFormulario(e) {
    e.preventDefault();
    let nombre = document.getElementById("nombre");
    let email = document.getElementById("email");
    let telefono = document.getElementById("telefono");
    let direccion = document.getElementById("direccion");
    let contactoH2 = document.querySelector ("#contactoH2");
    let formulario = document.querySelector ("#formularioId");

    if (nombre.value.length == 0) {
        mostrarError("Nombre", "")
        return false;
    }else
    if (email.value.length == 0) {
        mostrarError("email", "")
        return false;
    }else
    if ((telefono.value.length < 10)) {
        mostrarError("telefono", " con uno valido")
        return false;
    }else
    if (direccion.value.length == 0) {
        mostrarError("direccion", "")
        return false;
    }else{
        carritoFinal.remove();
        contactoH2.remove();
        formulario.remove();
        // eliminarCarrito();
    }
}
document.getElementById("botonEnviar").addEventListener("click", validarFormulario);