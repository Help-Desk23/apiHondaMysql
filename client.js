/*const io = require('socket.io-client'); 
const socket = io('http://localhost:5000');

socket.on('connect', () => {
    console.log('Conectado al servidor WebSocket');
    socket.emit('obtenerCotizacionAsesor');
});

socket.on('proformaData', (data) => {
    console.log('Datos mostrados:', data);
});

socket.on('error', (error) => {
    console.error('Error:', error.message);
});

socket.on('disconnect', () => {
    console.log('Desconectado del servidor WebSocket');
});*/



const io = require('socket.io-client'); 
const socket = io('http://localhost:5000');

// Simulamos un id_asesores de prueba
const id_asesores = 3; // Puedes cambiar este valor para probar otros asesores

socket.on('connect', () => {
    console.log('Conectado al servidor WebSocket');

    // Aquí mandas el id_asesores como objeto
    socket.emit('obtenerCotizacionAsesor', { id_asesores });
});

socket.on('proformaData', (data) => {
    console.log('Datos mostrados:', data);
});

socket.on('error', (error) => {
    console.error('Error:', error.message);
});

socket.on('disconnect', () => {
    console.log('Desconectado del servidor WebSocket');
});
