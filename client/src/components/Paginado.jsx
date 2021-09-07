import React from "react";

export default function Paginado({breedsPerPage, allBreeds, paginado}){
    const pageNumbers = [];

    for(let i = 1; i<= Math.ceil(allBreeds/breedsPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='paginado'>
                {pageNumbers?.map((number) => {
                    return(
                        
                        <button onClick={()=> paginado(number)} key={number}>{number}</button>

                    
                    )
                })}
                    
            </ul>
                        
        </nav>

    )
                    
                    
                        
}



    

