'use strict'

// AQUI Cargamos el modelo para usarlo posteriormente en la siguiente clase
var Persona = require('../modelos/persona.js');
var funciones = require('../helpers/funciones.js')
// Creamos un método en el controlador, en este caso una accion de pruebas
function guardar(req, res) {

    // Devolvemos una respuesta en JSON

    let persona = new Persona()
    persona.nombre = req.body.nombre
    persona.apellido = req.body.apellido
    persona.edad = req.body.edad
    persona.rut = req.body.rut
    persona.telefonos = req.body.telefonos
    persona.save((err, personastore) => {

        if (err) res.status(500).send(`Error base de datos> ${err}`)

        res.status(200).send({ persona: personastore })

    })
}

function buscar(req, res) {

    //    let nombrereq = req.params.nombre

    //params ->viene en la ruta sin nombre de paramertro ej persona/1 
    //query viene con un nombre de parametro en forma de get
    let nombrereq = req.query.nombre
    // let rutreq = req.query.rut
    //console.log(rutreq);
    Persona.find({ nombre: { $regex: '.*' + nombrereq + '.*' } }, (err, persona) => {
        if (!persona) return res.status(404).send({ message: 'Error persona no existe' })
        res.status(200).send({ persona })
    }).limit


}


function buscar2(req, res) {

    let rutreq = req.query.rut
    Persona.find()
        .where('rut').equals(rutreq)
        .exec(resultado);
    function resultado(err, respuesta) {
        if (err) return res.status(404).send({ message: 'Error la persona no existe' })
        if (!respuesta) return res.status(404).send({ message: 'Error la persona no existe' })

        res.status(200).send({ data: respuesta })
    }

}
function buscarPorID(req, res) {

    let idpersona = req.params.id
    Persona.findById(idpersona, (err, persona) => {
        if (err) return res.status(500).send({ message: 'error al realizar la peticion' })
        if (!persona) return res.status(404).send({ message: 'Error la persona no existe' })

        res.status(200).send({ persona })
    })
}

function todos(req, res) {

    Persona.find({}, (err, persona) => {
        if (err) return res.status(500).send({ message: 'error al realizar la peticion' })
        if (!persona) return res.status(404).send({ message: 'Error la persona no existe' })


    

       // let filtrar = funciones.getFilteredByKey(persona, 'apellido', 'perez')
        let find = funciones.findIn(persona, 'apellido', 'perez')

         let listaMorosos = ['17777732', '16154586', '3123123123','1722313']
         let morososdemisistema = []

        listaMorosos.forEach(element => {
            let moroso = funciones.findIn(persona, 'rut', element)
             if(moroso!=null){
             morososdemisistema.push(moroso)
             }
            }
        )

        res.status(200).send({ morososdemisistema })

    })
}

function BuscarPorRut(req, res) {


    let nombre = req.query.nombre
    let rut = req.query.rut
    console.log(rut);
    Persona.find({ nombre: nombre, rut: rut }, (err, persona) => {
        if (!persona) return res.status(404).send({ message: 'Error persona no existe' })
        res.status(200).send({ persona })
    }) 
}

// Exportamos las funciones en un objeto json para poder usarlas en otros fuera de este fichero
module.exports = {
    guardar,
    buscar,
    buscarPorID,
     todos, 
     buscar2,
     BuscarPorRut

};
