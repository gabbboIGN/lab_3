'use strict'

// AQUI Cargamos el modelo para usarlo posteriormente en la siguiente clase
var Autor = require('../modelos/autor.js');


function guardar(req,res){


    console.log("Estoy aqui")

    let autor = new Autor()
    autor.nombre = req.body.nombre 
    autor.nacionalidad = req.body.nacionalidad
    

    autor.save((err, autorguardado) => {

        res.status(200).send({ autorInsertado: autorguardado })

    })

}




module.exports = {
   guardar,
   
};