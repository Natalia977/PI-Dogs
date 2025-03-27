import React from "react";
import {Link} from "react-router-dom";
import './About.css';

export default function About(){
    return (
        
        <div className='main-about'>

            <div className='about-container'>
                <h2>Hi! I'm Natalia Suarez</h2><br />
                <h2>I'm from Catamarca, Argentina</h2><br />
                <h2>It's a pleasure to can show you my first App!</h2><br />
                <p>My first App and my individual Henry Bootcamp project, by the way!</p>
                <p>The technologies used were: Back end: NodeJS, Express, Sequelize, PostgreSQL; Front end: React, Redux, CSS</p>
                
            </div>
            <Link to='/home'><a className="title">Go back home</a></Link>
                       
        </div>
                    
    )
        
            
                
}