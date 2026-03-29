// Ejercicio 1: Métodos de Arreglos

// Dado el siguiente arreglo de productos, realiza las siguientes operaciones utilizando métodos de arreglos:
const productos = [
{ nombre: "Lapiz", precio: 242, categoria: "Papeleria"},
{ nombre: "Yogurt", precio: 59, categoria: "Lacteos"},
{ nombre: "Cereal", precio: 75, categoria: "Alimentos"},
{ nombre: "Leche", precio: 105, categoria: "Lacteos"},
{ nombre: "Pan", precio: 200, categoria: "Panaderia"},
];

// 1. Filtrar productos menores a 100
const menores = productos.filter(producto => producto.precio < 100)

// 2. Ordenar los productos alfabeticamente por su nombre
const productosOrdenados = [...productos].sort ((a, b) => a.nombre.localeCompare(b.nombre))

// 3. Usar map para crear un nuevo arreglo con solo los nombres de los productos
const nombres = productos.map(producto => producto.nombre)

// 4. Usar reduce para calcular el precio total de todos los productos
const total = productos.reduce((a, b) => a + b.precio, 0)

// 5. Usar find para encontrar el primer producto de la categoría "Lacteos"
const primerLacteo = productos.find(primer => primer.categoria === "Lacteos")

// 6. Usar some para verificar si hay algún producto con un precio mayor a 300
const mayor = productos.some(producto => producto.precio > 300)

// usar every para verificar si todos los productos tienen un precio menor a 100
const menor = productos.every(producto => producto.precio <= 242)

// Imprimir los resultados
console.log("Productos menores a 100:")
console.log(menores)
console.log("Productos ordenados alfabeticamente:")
console.log(productosOrdenados)
console.log("Nombres de los productos:")
console.log(nombres)
console.log("Precio total de los productos:")
console.log(total)
console.log("Primer producto de la categoria Lacteos:")
console.log(primerLacteo)
console.log("¿Hay algún producto con un precio mayor a 300?")
console.log(mayor)
console.log("¿Todos los productos tienen un precio menor o igual a 242?")
console.log(menor)