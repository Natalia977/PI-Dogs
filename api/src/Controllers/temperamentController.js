const {Temperament} = require('../db');
const axios = require('axios');
const {Op} = require('sequelize');
const {BREEDS_URL, BREEDS_QUERY} = require('../../constants');
const {v4 : uuidv4} = require('uuid');
/*
temperaments
--traer todos los temperam
--agregar un temperam (body)
--traer un temperam (id)
--editar un temperam (id, body)
--borrar un temperam (id)

*/


function getAllTemperaments(request, response, next){
    const {temperament} = request.query;
    //pregunto si la tabla esta vacia
    //si esta vacia ---> get a la api externa ---> .data.map
    //si no esta vacia ---> findAll a mi BD
    //con findOrCreate lo busco en mi BD, si no esta lo traigo de la
    //api externa y lo creo en mi BD
    //if(!temperament) return response.sendStatus(500);
    
    return Temperament.findOrCreate({
        where: {
            temperament: {
                [Op.substring]: `${temperament}`,
              }
        },
        defaults: {
            temperament: axios.get(`${BREEDS_URL}`)
            
            .then((temp)=> {
                temp.data.filter((t)=> t.temperament === temperament) 
                console.log(temp) 
            } )
            .catch((err)=> next(err))
        }
    })
    .then((tempApi) => response.send(tempApi))
    
    .catch((err) => next(err));
}
    
    
    
    
        
        
      

    
            
    
        
    
    
    
    // const {temperament} = request.query
    // const temperamentApi = axios.get(`${BREEDS_URL}`);
    // const temperamentMine = Temperament.findAll()
    // Promise.all([temperamentApi, temperamentMine])
    //     .then ((res) => {
    //         let [temperamentApiResponse, temperamentMineResponse] = res;
    //         return response.send(
    //             temperamentMineResponse.concat(temperamentApiResponse.data)
    //         )
    //     })
    //     .catch((err) => next(err));
    


module.exports = {
    getAllTemperaments,
    
}