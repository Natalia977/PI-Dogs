const {Persona, Propietario} = require('../db');
const {Op} = require('sequelize');
require('dotenv').config();
const {v4 : uuidv4} = require('uuid');



// models.Project.create(project, {
//     include : [{
//             model : models.Sprint,
//             as : 'sprints'
//         }
//     ]
// }).then(function (project) {
//     return res.json(project);
// }, function (err) {
//     return next(err);
// });

const obtenerPropietario = async () => {
    return await Propietario.findAll({
        include: {
            model: Persona,
            attributes: ['nombre'],
            through: {
                attributes: [],
            }
        }
    })
}

module.exports = {
    obtenerPropietario 
}