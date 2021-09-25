import React from "react";
import './Card.css';

export default function Card({name, temperament, weight, image, life_span, origin, id}){
    return (
        <div key={id} className='card-container'>
            
            <div className='img-card-container'>
                <img className='img-card-styles' src={image} height="200px" width="270px" alt=""/>

            </div>

                <div className='data-breed'>
                <h2>{name}</h2>
                <h5>{temperament}</h5>
                <h5>Weight: {weight} kg</h5>
                <h5>Life span: {life_span}</h5>
                <h5>Origin: {origin}</h5>
                    

            </div>  
                
        </div>
    )
}
            
            