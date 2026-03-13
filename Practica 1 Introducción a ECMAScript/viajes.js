// viajes.js

// Array para guardar los destinos //
// Se cambia a const porque no se reasigna el arreglo, solo se modifican sus elementos
const destinos = [];

// Función para registrar un destino de viaje y se exporta para ser utilizada en app.js
export const registrarDestino = (destino, fecha, transporte) => {
    // TODO: Crear un objeto con los datos del destino
    // Se cambia a const porque no se reasigna el objeto, solo se crean nuevos objetos para cada viaje
    const nuevoViaje = {
        destino,
        fecha,
        transporte,
        costo: calcularCosto(destino, transporte)
    };

    destinos.push(nuevoViaje);
}

// Función para calcular el costo del viaje
// Se cambia a const porque no se reasigna la función, solo se define una vez
const calcularCosto = (destino, transporte) => {
    // Se cambia a let porque el costo base se va a modificar según el destino y el transporte
    let costoBase = 0;

    // Costo base por destino
    if (destino === "Paris") {
        costoBase = 500;
    } else if (destino === "Londres") {
        costoBase = 400;
    } else if (destino === "New York") {
        costoBase = 600;
    } else if (destino === "Tokio") {
        costoBase = 700;
    } else if (destino === "España") {
        costoBase = 300;
    }

    // Costo adicional por tipo de transporte
    if (transporte === "Avión") {
        costoBase += 200;
    } else if (transporte === "Tren") {
        costoBase += 100;
    } else if (transporte === "Autobús") {
        costoBase += 50;
    }

    return costoBase;
}

// Función para mostrar el itinerario de los viajes registrados y se exporta para ser utilizada en app.js
// Se cambia a const porque no se reasigna la función, solo se define una vez
export const mostrarItinerario = () => {
    // TODO: Recorrer el arreglo de destinos y mostrar la información de cada uno
    // Utilizamos forEach para iterar sobre el arreglo de destinos
    destinos.forEach(viaje => {
        // Cambiamos console.log para mostrar la información de cada viaje de manera más clara
        console.log(`Destino: ${viaje.destino}`);
        console.log(`Fecha: ${viaje.fecha}`);
        console.log(`Transporte: ${viaje.transporte}`);
        console.log(`Costo: $${viaje.costo}`);
        console.log("---------------------------");
    });
}
