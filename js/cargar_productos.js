function cargarProductos(array, idCardProduct){
    let contenido = "";
    for(producto of array){
        contenido += `
        <div class="divProductos">
            <div class="cardProductos">
                <img src=${producto.imagen} alt="${producto.linea}">
                <h3>${producto.linea}</h3>
                <div class="container-fluid divContCard">
                    <div class="row">
                    <p class="col-12">${producto.capacidad}</p>
                    <p class="col-12">$${producto.precio}</p>
                    <button type="button" class="btn btn-secondary col-12" onclick="agregarAlCarrito(${producto.id})">Añadir</button>
                </div>
            </div>
        </div>`
    }
    document.getElementById(idCardProduct).innerHTML = contenido;
}


guardarTazasLS(tazas);
guardarCuencosLS(cuencos);
guardarMatesLS(mates);
cargarProductos(cargarTazasLS(), "articuloTazas");
cargarProductos(cargarCuencosLS(), "articuloCuencos");
cargarProductos(cargarMatesLS(), "articuloMates");