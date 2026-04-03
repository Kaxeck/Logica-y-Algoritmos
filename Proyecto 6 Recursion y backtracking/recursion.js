// Recursion y backtracking

// Arreglo de regalos
const regalos = [ "Muñeca", "Carro", "Rompecabezas", "Pelota", "Juego de mesa" ];
// Función para encontrar un regalo utilizando recursión
function findGift(gifts, giftName, index = 0) {
    // Caso base: si el índice alcanza la longitud del arreglo, significa que el regalo no se encontró.
    if (index === gifts.length) {
        // Devolver un mensaje indicando que el regalo no está en la lista.
        return `${giftName} no está en la lista.`;
    }
    // Caso base: si el regalo en la posición actual coincide con el nombre del regalo que estamos buscando.
    if (gifts[index] === giftName) {
        // Devolver un mensaje indicando que el regalo está en la lista.
        return `${giftName} está en la lista.`;
    }
    // Realiza la llamada recursiva para seguir buscando el regalo aumnentando el índice en cada llamada.
    return findGift(gifts, giftName, index + 1);
}
// Ejemplo de uso
console.log("---- Ejemplo regalo en la lista ----");
console.log(findGift(regalos, "Carro")); // Output: "Carro está en la lista."
console.log(findGift(regalos, "Pelota")); // Output: "Pelota está en la lista."

console.log("---- Ejemplo regalo no en la lista ----");
console.log(findGift(regalos, "Bicicleta")); // Output: "Bicicleta no está en la lista."
console.log(findGift(regalos, "Dron")); // Output: "Dron no está en la lista."