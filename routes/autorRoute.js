'use strict'
 
// Cargamos el módulo de express para poder crear rutas
var express = require('express');
const autoController = require('../controllers/autoController');
 
// Cargamos el controlador
var autorController = require('../controllers/autoController');
 
// Llamamos al router
var api = express.Router();
 
//  Guardar Autos
api.post('/autor', autorController.guardar);


// Exportamos la configuración
module.exports = api;