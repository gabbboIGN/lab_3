'use strict'
 
// Cargamos el módulo de express para poder crear rutas
var express = require('express');
 
// Cargamos el controlador
var libroController = require('../controllers/libroController');
 
// Llamamos al router
var api = express.Router();
 
//  Guardar libro
api.post('/libros', libroController.guardar);
api.get('/libros', libroController.listar);

// Exportamos la configuración
module.exports = api;