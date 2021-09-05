import axios from 'axios';
import {BREEDS_LOCAL_URL, GET_BREEDS} from './constants'

export function getBreeds(){
    return async function(dispatch){
        var json = await axios.get(`${BREEDS_LOCAL_URL}`,{
            
        });
        return dispatch({
            type: GET_BREEDS,
            payload: json.data
        })
    }
}