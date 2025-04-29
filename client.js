const io = require('socket.io-client'); 
const socket = io('http://177.222.114.122:3306');

socket.on('connect', () => {
    console.log('Conectado al servidor WebSocket');
    socket.emit('obtenerAsesores');
});

socket.on('asesores', (data) => {
    console.log('Datos mostrados:', data);
});

socket.on('error', (error) => {
    console.error('Error:', error.message);
});

socket.on('disconnect', () => {
    console.log('Desconectado del servidor WebSocket');
});

