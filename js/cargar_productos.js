const cargarProductos = (idCardProduct) => {
    let contenido = "";
    fetch("https://raw.githubusercontent.com/ezequieleandi/DesafioJsObligatorio/main/productos.json")
    .then((response) => response.json())
    .then((data) =>{
        let tazas = data.filter((el) => el.producto.includes("taza"))
        let cuenco = data.filter((el) => el.producto.includes("cuenco"))
        let mates = data.filter((el) => el.producto.includes("mate"))
        function iterarProductos(articulo){
            articulo.forEach(producto =>{
                contenido += `
                    <div class="cardProductos">
                        <img src=${producto.imagen} alt="${producto.linea}">
                        <h3>${producto.linea}</h3>
                        <div class="container-fluid divContCard">
                            <div class="row">
                                <p class="col-12">${producto.caracteristica}</p>
                                <p class="col-12">$${producto.precio}</p>
                                <select id="selectTaza-${producto.id}"></select>
                                <button type="button" class="btn btn-secondary col-12" onclick="agregarAlCarrito(${producto.id})">Añadir</button>
                            </div>
                        </div>
                    </div>`
                    let currentSelect = document.getElementById(`selectTaza-${producto.id}`)
                    producto.caracteristica.forEach( caracteristica => currentSelect.innerHTML +=
                    `<option>Capacidad: ${caracteristica.capacidad} // $ ${caracteristica.precio}</option>`)
            })
            document.getElementById(idCardProduct).innerHTML = contenido;
            // for(producto of articulo){
            //     contenido += `
            //         <div class="cardProductos">
            //             <img src=${producto.imagen} alt="${producto.linea}">
            //             <h3>${producto.linea}</h3>
            //             <div class="container-fluid divContCard">
            //                 <div class="row">
            //                     <p class="col-12">${producto.caracteristica}</p>
            //                     <p class="col-12">$${producto.precio}</p>
            //                     <select id="selectTaza-${producto.id}"></select>
            //                     <button type="button" class="btn btn-secondary col-12" onclick="agregarAlCarrito(${producto.id})">Añadir</button>
            //                 </div>
            //             </div>
            //         </div>`
            //         // let currentSelect = document.getElementById(`selectTaza-${producto.id}`)
            //         // console.log(currentSelect)
            //         // for(carac of caracteristica){
            //         //     currentSelect.innerHTML += `<option>Capacidad: ${carac.capacidad} // $ ${carac.precio}</option>`
            //         // }
            //         // producto.caracteristica.forEach( caracteristica => currentSelect.innerHTML +=
            //         // `<option>Capacidad: ${caracteristica.capacidad} // $ ${caracteristica.precio}</option>`)
            // }
            // document.getElementById(idCardProduct).innerHTML = contenido;
        }
        if(idCardProduct == "articuloTazas"){
            iterarProductos(tazas)
        }
        if(idCardProduct == "articuloCuencos"){
            iterarProductos(cuenco)
        }
        if(idCardProduct == "articuloMates"){
            iterarProductos(mates)
        }
    })
}

cargarProductos("articuloTazas");
cargarProductos("articuloCuencos");
cargarProductos("articuloMates");
actualizarBotonCarrito();