const express = require('express');
const {addAdmin, updateAdmin, deleteAdmin} = require('../../controllers/admin/admin');

const adminRouter = express.Router();

// Rutas para agregar usuario administrador

adminRouter.post('/admin', addAdmin);

// Ruta para modificar un usuario administrador

adminRouter.patch('/admin/:id', updateAdmin);

// Ruta para eliminar un usuario administrador

adminRouter.delete('/admin/:id', deleteAdmin);  




module.exports = adminRouter;