// app.js

// Importamos las funciones necesarias usando destructuración { }
import { registrarDestino, mostrarItinerario } from './viajes.js';

// Iniciar la aplicación
// Se define la función iniciarApp para organizar el flujo de la aplicación
const iniciarApp = () => {
    // Ejemplo de cómo registrar destinos
    registrarDestino("Paris", "2024-06-15", "Avión");
    registrarDestino("Londres", "2024-07-01", "Tren");
    registrarDestino("New York", "2024-08-20", "Avión");
    registrarDestino("Tokio", "2024-09-10", "Avión");
    registrarDestino("España", "2024-10-05", "Autobús");

    // Mostrar el itinerario de los viajes
    mostrarItinerario();
}

// Ejecutar la aplicación
iniciarApp();
