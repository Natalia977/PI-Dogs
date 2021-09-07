import axios from 'axios';
import {BREEDS_LOCAL_URL, GET_BREEDS, FILTER_BY_BREED, FILTER_TEMPERAMENT, TEMPERAMENTS_LOCAL_URL, ORDER_BY_BREED} from '../constants'

export function getBreeds(){
    return async function(dispatch){
        var json = await axios.get(`${BREEDS_LOCAL_URL}`,{//aqui se conecta el back con el front
            
       });
        return dispatch({
            type: GET_BREEDS,
            payload: json.data
        })
    }
}

export function filterByTemperament(payload){
    console.log(payload)
    return async function(dispatch){
        var json = await axios.get(`${TEMPERAMENTS_LOCAL_URL}`, {

        });
        return dispatch({
            type: FILTER_TEMPERAMENT,
            payload: json.data
        })
    }
}
    

export function filterByBreed(payload){
    console.log(payload)
    
    return {
        type: FILTER_BY_BREED,
        payload
    }
}
    
    

export function orderByBreed(payload){
    console.log(payload)
    return {
       type: ORDER_BY_BREED,
       payload
    }
}
    
    
    
