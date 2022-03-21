const { Router } = require('express');
const { obtenerPropietario } = require('../Controllers/propietarioController');
const { Persona, Propietario } = require('../db');

const router = Router();

// router.get('/personas', async (req, res) => {
//     const nombre = req.query.name;
//     let propietariosTotal = await obtenerPropietario();
//     if (nombre) {
//         let propietarioNombre = await propietariosTotal.filter(el => el.nombre.toLowerCase().includes(nombre.toLowerCase()));
//         propietarioNombre.length ?
//             res.status(200).send(propietarioNombre) :
//             res.status(404).send('El propietario no fue encontrado');
//     } else {
//         res.status(200).send(propietariosTotal)
//     }
// });

// router.post('/persona', async (req, res) => {
//     let {
//         nombre,
//         apellido,
//         dni,
//         telefono,
//         email
//     } = req.body;

//     let propietarioCreado = await Propietario.create(propietario,

//         {
//             nombre,
//             apellido,
//             dni,
//             telefono,
//             email,
//             createdInDb

//         },
//         {

//             include: [{
//                 model: Persona,
//                 as: persona
//             }]

//         }
//     );


//     res.status(200).json(propietarioCreado).send('El propietario fue creado correctamente!!')
// });