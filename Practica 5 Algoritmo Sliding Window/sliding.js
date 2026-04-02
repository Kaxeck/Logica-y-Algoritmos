// Algoritmo Sliding Window

// Funcion para encontrar la palabra más larga en un texto utilizando el algoritmo Sliding Window
function textoLargo(texto) {
    // Dividir el texto en palabras utilizando el espacio como separador
    const palabras = texto.split(" ")
    // Variable para almacenar la palabra más larga encontrada
    let palabraLarga = '';
    // Recorrer el array de palabras y comparar la longitud de cada palabra con la palabra más larga encontrada hasta el momento
    for (let i = 0; i < palabras.length; i++) {
        // Si la longitud de la palabra actual es mayor que la longitud de la palabra más larga encontrada, actualizar la variable palabraLarga
        if (palabras[i].length > palabraLarga.length) {
            palabraLarga = palabras[i];
        }
    }
    // Devolver la palabra más larga encontrada
    return palabraLarga;
}
// Ejemplo de uso
let texto = "El algoritmo Sliding Window es una técnica de programación que se utiliza para resolver problemas de optimización en los que se busca encontrar un subconjunto de elementos que cumpla ciertas condiciones."
// Llamar a la función textoLargo con el texto de ejemplo y mostrar el resultado
console.log(textoLargo(texto))