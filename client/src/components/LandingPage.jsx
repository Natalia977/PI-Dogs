import React from "react";
import {Link} from 'react-router-dom';
import './LandingPage.css';

export default function LandingPage(){
    return(
        <div className = 'main-container'>
            <div className = 'welcome-title'>
                <h1>Welcome to Doggy Fans!</h1>
                <h4>Do you want to know about dog breeds?</h4>
            
            </div>
            <div className='welcome-btn'>
                <Link to='/home'>
                    <button className='enter-btn'>Come!</button>
                </Link>

            </div>

            
            

        </div>
                    
    )

        

            
            
            
            
            

            
            
}