'use strict'

// AQUI Cargamos el modelo para usarlo posteriormente en la siguiente clase
var Libro = require('../modelos/autor.js');


function guardar(req,res){


    console.log("Estoy aqui")

    let libro = new Libro()
    libro.nombre = req.body.nombre 
    libro.idioma = req.body.idioma
    libro.codigo = req.body.codigo
    libro.año = req.body.año
    libro.autor = req.body.idautor 


    libro.save((err, libroguardado) => {

        res.status(200).send({ libroInsertado: libroguardado })

    })

}

 // Noa muestar Todos los libros de un Autor especifico.
function buscarLibroAutor(req, res) {

    let nombre = req.params.nombre
    let codigo = req.params.codigo
    console.log (nombrereq);
    Autor.find({nombre: nombre, codigo: codigo}, (err, nombre) => {
        if (err) return res.status(500).send({ message: 'error al realizar la peticion' })
        if (!persona) return res.status(404).send({ message: 'Error el autor no existe' })

        res.status(200).send({ nombre })
    })
}



module.exports = {
   guardar,
   buscarLibroAutor
   
};