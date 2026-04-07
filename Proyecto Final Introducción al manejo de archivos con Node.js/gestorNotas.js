// Proyecto Final: Gestor de Notas con Node.js

// modulo file system de Node.js para manejar archivos
const fs = require('fs');

// Ruta del archivo de notas
const filePath = './notas.json';

/**
 * Agrega una nueva nota al archivo.
 * @param {string} titulo - El título de la nota.
 * @param {string} contenido - El contenido de la nota.
 */

// Función para agregar una nueva nota al archivo de notas
function agregarNota(titulo, contenido) {
    let notas = [];
    // Comprobar si el archivo de notas existe
    if (fs.existsSync(filePath)) {
        console.log('Archivo de notas encontrado. Leyendo notas existentes...');
        const data = fs.readFileSync(filePath, 'utf8');
        notas = JSON.parse(data);
    } 
    // Si el archivo no existe, se creará uno nuevo al guardar la primera nota
    else {
        console.log('No se encontró el archivo de notas. Creando uno nuevo...');
    }
    // Crear un nuevo objeto de nota con el título y contenido proporcionados
    const nuevaNota = { titulo, contenido };
    notas.push(nuevaNota);
    // Guardar las notas actualizadas en el archivo, formateando el JSON para mejor legibilidad
    fs.writeFileSync(filePath, JSON.stringify(notas, null, 2));
    console.log('Nota agregada con éxito.');
}

// Función para listar todas las notas guardadas en el archivo
function listarNotas() {
    // Comprobar si el archivo de notas existe antes de intentar leerlo
    if (fs.existsSync(filePath)) {
        // Leer el contenido del archivo y parsearlo como JSON para obtener el arreglo de notas
        const data = fs.readFileSync(filePath, 'utf8');
        const notas = JSON.parse(data);
        console.log('Notas guardadas:');
        notas.forEach((nota) => {
        console.log(`- ${nota.titulo}: ${nota.contenido}`);
        });
    } 
    // Si el archivo no existe, informar al usuario que no hay notas guardadas
    else {
    console.log('No hay notas guardadas.');
    }
}

/**
 * Elimina una nota por su título.
 * @param {string} titulo - El título de la nota a eliminar.
 */

// Función para eliminar una nota por su título
function eliminarNota(titulo) {
    if (fs.existsSync(filePath)) {
        // Leer el contenido del archivo y parsearlo como JSON para obtener el arreglo de notas
        const data = fs.readFileSync(filePath, 'utf8');
        let notas = JSON.parse(data);
        // Filtrar el arreglo de notas para eliminar la nota con el título especificado
        const notasRestantes = notas.filter((nota) => nota.titulo !== titulo);
        // Guardar las notas restantes en el archivo, formateando el JSON para mejor legibilidad
        fs.writeFileSync(filePath, JSON.stringify(notasRestantes, null, 2));
        console.log(`Nota con título "${titulo}" eliminada.`);
    } 
    // Si el archivo no existe, informar al usuario que no hay notas para eliminar
    else {
        console.log('No hay notas para eliminar.');
    }
}

// Ejecución de ejemplo
console.log('--- Gestor de Notas ---');
console.log('--Agregando una nota--');
agregarNota('Compras', 'Comprar Queso.');
listarNotas();
console.log('--Eliminando la nota--');
eliminarNota('Compras');
console.log('--Agregando una nueva nota--');
agregarNota('Trabajo', 'Terminar reparacion del coche.');
listarNotas();
