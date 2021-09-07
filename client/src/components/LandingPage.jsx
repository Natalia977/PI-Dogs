import React from "react";
import {Link} from 'react-router-dom';

export default function LandingPage(){
    return(
        <div>
            <h1>Mi mejor amigo</h1>
            <h2>Bienvenidos!</h2>
            <Link to='/home'>
                <button className='boton_personalizado'>Ingresar</button>
            </Link>
        </div>
    )
}