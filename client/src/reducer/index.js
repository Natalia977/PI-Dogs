import { GET_BREEDS, FILTER_BY_BREED, FILTER_TEMPERAMENT, ORDER_BY_BREED} from "../constants";


const initialState = {
    breeds: [],
    allBreeds: [],
    temperaments: []
}

export default function reducer(state = initialState, action){
    switch (action.type) {
        case GET_BREEDS:
            return {
                ...state,
                breeds: action.payload,
                allBreeds: action.payload
            }

        case FILTER_TEMPERAMENT:
            const allTemperaments = state.temperaments;
            const temperamentFiltered = action.payload === 'name'? allTemperaments : allTemperaments.filter(el => el.name === action.payload)
            return {
                ...state,
                temperaments: temperamentFiltered 
            }
        
        case FILTER_BY_BREED:
            const allBreedsFind = state.allBreeds;
            const breedFiltered = action.payload === 'createdInDb'? allBreedsFind.filter(el => el.createdInDb) : allBreedsFind.filter(el => !el.createdInDb)
            return {
                ...state,
                breeds: action.payload === 'all' ? state.allBreeds : breedFiltered 
           }

        case ORDER_BY_BREED:
            let sortedArr = action.payload === 'asc'?
                state.allBreeds.sort(function(a,b){
                    if(a.name > b.name){
                        return 1;
                    }
                    if(b.name > a.name){
                        return -1;
                    }
                    return 0;
                }) :
                state.allBreeds.sort(function(a,b){
                    if(a.name > b.name){
                        return -1;
                    }
                    if(b.name > a.name){
                        return 1;
                    }
                    return 0;
                })
            return {
                ...state,
                breeds: sortedArr
            }
            
            
    
        default: return state;
            
    }
}