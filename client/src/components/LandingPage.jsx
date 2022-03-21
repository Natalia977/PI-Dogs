import React from "react";
import {Link} from 'react-router-dom';
import './LandingPage.css';

export default function LandingPage(){
    return(
        <div className = 'main-container'>
            <div className = 'welcome-title'>
                <h1>MSL - ADMINISTRACION DE CONSORCIOS </h1>
                <h4>CONTROL DE TRABAJOS DE MANTENIMIENTO</h4>
            
            </div>
            <div className='welcome-btn'>
                <Link to='/home'>
                    <button className='enter-btn'>Enter</button>
                </Link>

            </div>

            
            

        </div>
                    
    )

        

            
            
            
            
            

            
            
}