'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
var persona_routes = require('./routes/personaRoute');
var auto_routes = require('./routes/autoRoute');
var auto_person_routes = require('./routes/autopersonaRoute');

var profesor_routes = require('./routes/profesoreRoute');
var asignatura_routes = require('./routes/asignaturaRoute');
var persona_asignatura_routes = require('./routes/personas_asignaturaRoute');


const mongoose = require('mongoose')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/api',persona_routes);
app.use('/api', auto_routes);
app.use('/api', auto_person_routes);
app.use('/api', profesor_routes);
app.use('/api', asignatura_routes);
app.use('/api', persona_asignatura_routes);
app.use ('/api', libro_routes);
app.use ('/api', prestamo_routes);
app.use ('/api', autor_routes);


mongoose.connect('mongodb+srv://GABBO:12345@cluster0.milsb.mongodb.net/UBB_WEB?retryWrites=true&w=majority', (err, res) => {

    if(err){
        console.log("NO CONECTA")
    }
    app.listen(4000, () => {

        console.log("Esta corriendo en puerto 4000")
    })
})