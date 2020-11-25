'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const PrestamoSchema = Schema(
    {
      
      persona: [{ type: Schema.ObjectId, ref: "personas" }] ,
      libro: [{ type: Schema.ObjectId, ref: "libro" }] ,
      fecha_prestamo: Date,

    })

module.exports = mongoose.model('prestamo',PrestamoSchema)   