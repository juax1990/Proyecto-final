function obtenerProductosServicios(categoria = "") {
    if (categoria === null || categoria === "") {
        return lista_productos;
    } else {
        return lista_productos.filter(p => p.codigo_categoria === categoria);
    }
}

// Función de devuelve la información de una producto o servicio dado su código.
function obtenerProductoServicioPorCodigo(codigo) {
    /*
    for (let index = 0; lista_cursos < lista_cursos.length; index++) {
        if( lista_cursos[index].cidigo === codigo ) {
            return lista_cursos[index];
        }
    }
    return null;
    */
    return lista_productos.find(producto => producto.codigo === codigo);    
}

// Funciones relacionasdas con el carrito de compras

function mostrarCarrito() {
    let etiqueta_carrito = document.getElementById("etiqueta_carrito");
    etiqueta_carrito.innerHTML = "";
    
    let costoTotal = 0;

    carrito = obtenerCarrito();

    carrito.forEach((elemento, posicion) => {

        let li = document.createElement("li");
        li.innerHTML = `
                <div class="d-flex justify-content-between align-items-center p-2 border-bottom border-dark">
                    <div class="row">
                        <p class="my-0">${elemento.nombre}</p>
                        <small>${elemento.precio}</small>
                    </div>
                    <a class="btn bg-warning text-decoration-none text-dark" href="#" onclick="eliminarProducto('${posicion}')" >
                        <i class="fa fa-times"></i>
                    </a>
                </div>`;
        etiqueta_carrito.appendChild(li);
        costoTotal = costoTotal + elemento.precio;
    });

    let etiqueta_total = document.getElementById("etiqueta_total");
    etiqueta_total.innerText = new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0
    }).format(costoTotal);
}

function obtenerCarrito() {
    let carrito = [];
    const str = localStorage.getItem("carrito");
    if (str) {
        carrito = JSON.parse(str);
    }
    return carrito;
}

function agregarProducto(productos, mostrar = true) {
    let carrito = obtenerCarrito();
    carrito.push(productos);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    if (mostrar === true){
        mostrarCarrito();
    }
}

function eliminarProducto(posicion) {
    carrito.splice(posicion, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito()
}

function vaciarCarrito() {
    carrito = [];
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}