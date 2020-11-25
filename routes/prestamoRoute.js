'use strict'
 
// Cargamos el módulo de express para poder crear rutas
var express = require('express');
 
// Cargamos el controlador
var prestamo = require('../controllers/prestamo');
 
// Llamamos al router
var api = express.Router();
 
//  Guardar Autos
api.post('/prestamos', prestamo.guardarPrestamos);
api.get('/prestamos2', prestamo.listar);
api.get('/prestamos3', prestamo.autoresLibros);

// Exportamos la configuración
module.exports = api;
