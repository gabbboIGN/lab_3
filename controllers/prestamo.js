const { populate } = require('../modelos/prestamo.js');
var Prestamos = require('../modelos/prestamo.js');

function guardarPrestamos(req,res){

    let prestamo = new Prestamos()
    prestamo.persona=req.body.idPersona
    prestamo.libro=req.body.idLibro
    prestamo.libro = req.body.fecha
    prestamo.save((err, prestamosReg) => {

        res.status(200).send({ registroInsertado: prestamosReg })

    })

  }
/* Nos muestra Todos los nombres y códigos de libro que alguna ves han 
sido prestados a una persona en especifico,buscando por el rut de la persona.*/
  async function listar(req,res){
      let resultadoFinal=[]
      var filatrado =[]
    await Prestamos.find()
     
     .populate('nombre','codigo',{rut:{$eq: ''}})
      .exec((err, resultado) => {

       res.status(200).send({resultado  })
     })
 } 

 /* El nombre de los autores de los libros prestados a una persona especifica. */
 async function autoresLibros(req,res){
    var persona = [] 
  try{
      let libro = await Prestamos.find ({persona: ""}) . populate ('autor');
     for ( let doc of libro){
         let data = await Persona .findeOne ({"_id" :doc.persona.libro }) ;
         libro.push(data);
     }
     res.send(Persona);

  } catch(err){
      res.send(err);
  }
} 
 

  module.exports ={
    guardarPrestamos,
    listar, autoresLibros
    

};