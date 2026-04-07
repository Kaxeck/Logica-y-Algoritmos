// Divide y venceras

// Función para encontrar el número máximo en un arreglo utilizando el enfoque de divide y vencerás
function findMax(arr) {
    // Caso base: si el arreglo tiene un solo elemento, ese elemento es el máximo
    if (arr.length === 1) {
        // Devolver el único elemento del arreglo como el máximo
        return arr[0];
    }

    // Dividir el arreglo en dos mitades
    const mid = Math.floor(arr.length / 2);
    // Crear subarreglos para la mitad izquierda y la mitad derecha utilizando el método slice
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Encontrar el máximo en cada mitad de forma recursiva
    const leftMax = findMax(left);
    const rightMax = findMax(right);

    // Combinar las soluciones comparando los máximos
    return Math.max(leftMax, rightMax);
}
// Ejemplo de entrada
const numbers = [3, 8, 2, 10, 5, 7, 6, 4, 9, 15];
console.log(findMax(numbers));