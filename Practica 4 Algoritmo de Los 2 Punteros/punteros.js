//Algoritmo de los 2 punteros

// Arreglo de invitados a una fiesta con nombres que comienzan con la misma letra alfabéticamente
const invitados = ["Ana", "Alberto", "Cecilia", "Daniel", "Saul", "Eduardo"];
// Arreglo en orden alfabético con nombres que no tienen la misma inicial 
const invitados2 = ["Ana", "Bruno", "Cecilia", "Daniel", "Eduardo", "Saul"];
// Función para encontrar un par de invitados con la misma inicial utilizando el algoritmo de los 2 punteros
function encontrarPareja(arr) {
    //
    let inicio = 0;
    let siguiente = 1;
    // Condición para recorrer el arreglo mientras el puntero siguiente no alcance el final del arreglo
    while (siguiente < arr.length) {
        // Compara las iniciales de los nombres en los punteros
        if (arr[inicio][0] === arr[siguiente][0]) {
            // Si coinciden, devuelve el par
             return [arr[inicio], arr[siguiente]]; // Devuelve el par encontrado
        }
        // si no coinciden, avanza ambos punteros y repite
        inicio++;
        siguiente++;
    }
    // Si no se encuentra ningún par, devuelve null
    return null;
}
// Prueba con el primer arreglo que tiene nombres con la misma inicial
console.log("Probando con el primer arreglo que tiene nombres con la misma inicial");
console.log(encontrarPareja(invitados));
// Prueba con el segundo arreglo que no tiene nombres con la misma inicial
console.log("Probando con el segundo arreglo que no tiene nombres con la misma inicial");
console.log(encontrarPareja(invitados2));