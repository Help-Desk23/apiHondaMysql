const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const { getAdmin } = require('./controllers/admin/admin');
const adminRouter = require('./router/admin/adminRouter');
const { getSucursales } = require('./controllers/sucursales/sucursal');
const sucursalRout = require('./router/sucursales/sucursalRouter');
const { getCostos } = require('./controllers/costovarios/costo');
const costoRouter = require('./router/costovarios/costoRouter');
const { getAsesores } = require('./controllers/asesor/asesor');
const asesorRouter = require('./router/asesor/asesorRouter');
const { getMotos } = require('./controllers/motos/motos');
const motosRouter = require('./router/motos/motosRouter');
const path = require('path');
const { getProformas, getCotizacion, getCotizacionAsesor} = require('./controllers/proforma/proforma');
const proformaRout = require('./router/proforma/proformaRouter');
const { getClientes } = require('./controllers/cliente/cliente');
const clienteRouter = require('./router/cliente/clienteRouter');


const app = express();
app.use(express.json());
require('dotenv').config();


// Configuracion inicial WebSocket

const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('Cliente conectado:', socket.id);

    // Usuario Administradores

    socket.on('obtenerAdmin', () => {
        getAdmin(socket);
    });

    // Sucursales
    
    socket.on('obtenerSucursales', () => {
        getSucursales(socket);
    });

    // Costo Varios

    socket.on('obtenerCosto',() => {
        getCostos(socket);
    });

    // Asesores

    socket.on('obtenerAsesores', () => {
        getAsesores(socket);
    });

    // Motos

    socket.on('obtenerMotos', () => {
        getMotos(socket);
    });

    // Proformas

    socket.on('obtenerProformas', () => {
        getProformas(socket);
    });

    socket.on('obtenerCotizacion', () =>{
        getCotizacion(socket);
    });

    socket.on('obtenerCotizacionAsesor', ({id_asesores}) => {
        getCotizacionAsesor(socket, id_asesores);
    });

    // Clientes

    socket.on('obtenerClientes', () =>{
        getClientes(socket);
    });

    // Desconexión del cliente

    socket.on('disconnect', () => {
        console.log('Cliente desconectado:', socket.id);
    });
});


// Usuario Administrador

app.use("/", adminRouter);


// Sucursales

app.use("/", sucursalRout);

// Costo Varios

app.use("/", costoRouter);

// Asesores

app.use('/', asesorRouter);

// motos

app.use('/', motosRouter);

// Clientes

app.use('/', clienteRouter);

// Proformas

app.use('/', proformaRout);

// Muestra imagenes de las motos

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// Configuracion del puerto


const PORT = process.env.PORT;

server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
