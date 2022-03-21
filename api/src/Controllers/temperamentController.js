const {Temperament} = require('../db');


function allTemperaments(arrayStr){//array de strings con los temperamentos de todas las razas
    let arrayTemp = [];
        
    for (let i = 0; i < arrayStr?.length; i++) {
        
        let element = arrayStr[i]?.split(', ');
        
        for (let j = 0; j < element?.length; j++) {
        
            arrayTemp.push(element[j]);
            
        }
        
    }
    return arrayTemp;// arrayTemp es un array de temperamentos repetidos
}

function filterDuplicates(arrayAllTemp){
    let map = {};
    let arrayFiltered = [];
    
    for (let index = 0; index < arrayAllTemp.length; index++) {
    
        if(!(arrayAllTemp[index] in map)){
    
            map[arrayAllTemp[index]] = true;
    
            arrayFiltered.push(arrayAllTemp[index]);
        };
        
    }
    return arrayFiltered;//arrayFiltered es un array con los temperamentos sin repetir
}

function getAllTemperaments(_request, response, next){
    
    Temperament.findAll()
    .then((temp) => {
        
        return response.send(temp)
    })
        
    .catch((err) => next(err));
}
    
    
module.exports = {
    allTemperaments,
    filterDuplicates,
    getAllTemperaments,
}
    





    
    
    
    

    
    
        
   







    
    
    
    
    
        
        
      

    
            
    
        
    
    
    
    
    


    