import React from "react";
import { useState } from "react";
import { useDispatch} from "react-redux";
import { getBreedsByName} from "../actions";
import {Link} from "react-router-dom";
import './SearchBar.css';

export default function SearchBar(){
    const dispatch = useDispatch();
    
    const [name, setName] = useState("");
    
    const handleInputChange = (e) => {
        e.preventDefault();
        setName(e.target.value);        
    } 
        
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getBreedsByName(name)); 
        setName("")
    }
        
    return (
        <div>
            <input
            type='text'
            placeholder='Search...'
            value={name}
            onChange= {(e) => handleInputChange(e)}
            className='inputSearch'
            />
            <button className='search-btn' type='submit' onClick={(e)=> handleSubmit(e)}>Search</button>
        </div>
    )


}