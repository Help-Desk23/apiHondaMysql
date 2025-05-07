const io = require('socket.io-client'); 
const socket = io('https://www.vian.com.bo', {
  path: '/api-honda/socket.io'
});

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

