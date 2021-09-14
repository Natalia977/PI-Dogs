import React from "react";
import {Link} from 'react-router-dom';
import './LandingPage.css';

export default function LandingPage(){
    return(
        <div className = 'main-container'>
            <div className = 'welcome-title'>
                <h1>Welcome to Doggy Fans!</h1>
            <Link to='/home'>
                <button className='enter-btn'>Enter</button>
            </Link>

            </div>
            <div className='welcome-img'>
                
                <img className='img-styles' alt="" src="https://www.tiposde.com/wp-content/uploads/tipos-de-razas-de-perros-600x350.jpg"/>
                    
            </div>

        </div>
                    
    )

        

            
            
            
            
            

            
            
}