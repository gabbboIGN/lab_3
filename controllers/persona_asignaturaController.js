const { populate } = require('../modelos/personas_asignaturas.js');
var Personas_asignatura = require('../modelos/personas_asignaturas.js');

function guardarAsignatura_persona(req,res){

    let asignatura_persona = new Personas_asignatura()
    asignatura_persona.persona=req.body.idPersona
    asignatura_persona.asignatura=req.body.idAsignatura 
    asignatura_persona.save((err, asignatura_personasReg) => {

        res.status(200).send({ registroInsertado: asignatura_personasReg })

    })

  }

  function listar(req,res){
    Personas_asignatura.find()
     .populate('persona','nombre apellido')
     .populate('asignatura','codigo nombre',{nombre:{$eq: 'taller web'}})
      .exec((err, resultado) => {

       res.status(200).send({resultado  })
     })
 }


 function listarTodos(req,res){
  Personas_asignatura.find()
   .populate('persona','rut nombre apellido')
   .populate('asignatura')
    .exec((err, resultado) => {

     res.status(200).send({resultado  })
   })
}

  module.exports = {
    guardarAsignatura_persona,
    listar,
    listarTodos
};
