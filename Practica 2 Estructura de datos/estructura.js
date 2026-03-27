// Estructura de datos

// Array para almacenar la lista de compras
listaDeCompras = []
// Función para agregar un producto a la lista de compras
agregarProducto = (producto) => {
    // Agregar el producto a la lista
    listaDeCompras.push(producto)
    // Eliminar duplicados usando Set
    listaDeCompras = [...new Set(listaDeCompras)];
}
// Función para eliminar un producto de la lista de compras
eliminarProducto = (producto) => {
    // Buscar el índice del producto en la lista
    let indice = listaDeCompras.indexOf(producto)
    if (indice > -1) {
        listaDeCompras.splice(indice, 1)
    }
}
// Función para mostrar la lista de compras
mostrarLista = () => {
    console.log("Lista de compras:")
    // Recorrer la lista de compras y mostrar cada producto
    listaDeCompras.forEach((producto, index) => {
        console.log(`${index + 1}. ${producto}`)
    })
}

// Ejemplo de uso
agregarProducto("Fruta")
agregarProducto("Leche")
agregarProducto("Pan")
agregarProducto("Pan")
agregarProducto("Huevos")
agregarProducto("Queso")
agregarProducto("Queso")
// Mostrar la lista de compras
mostrarLista()
// Eliminar un producto
console.log("Eliminando Pan de la lista...")
eliminarProducto("Pan")
mostrarLista()