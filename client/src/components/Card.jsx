import React from "react";

export default function Card({name, temperament, weight, image}){
    return (
        <div>
            <h3>{name}</h3>
            <h5>{temperament}</h5>
            <h5>{weight}</h5>
            <img src={image} alt="not found" width="200px" height="250px" />
        </div>
    )
}