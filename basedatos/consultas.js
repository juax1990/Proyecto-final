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
    return lista_productos.find(producto => productos.codigo === codigo);    
}
