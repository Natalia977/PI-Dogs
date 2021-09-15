import React, {useState, useEffect} from "react";
import {Link, useHistory} from 'react-router-dom';
import {postBreed, getTemperaments} from '../actions/index';
import { useDispatch, useSelector } from "react-redux";
import './BreedCreate.css'


function validateForm(input){
    let errors = {};
    if(!input.name){
        errors.name = "Name is required";
    }
    if(!input.height){
        errors.height = "Is required. Must be 'min - max' number ";
    }
    if(!input.weight){
        errors.weight = "Is required. Must be 'min - max' number";
    }
    if(!input.life_span){
        errors.life_span = "Is required. Must be 'min - max' number";
    }

    return errors;
        
}

export default function BreedCreate(){
    const dispatch = useDispatch();
    const history = useHistory()
    const temperaments = useSelector((state) => state.temperaments);
    const [errors, setErrors] = useState({});

   

    const [input, setInput] = useState({ 
        name: "",
        height: "",
        weight: "",
        life_span: "",
        image:"",
        temperament: [] 
    })

    function handleChange(e){
        setInput({  
            ...input,
            [e.target.name] : e.target.value
        })
        console.log(input)

        setErrors(validateForm({
            ...input,
            [e.target.name] : e.target.value
        }))
        console.log(input)
        
    }

    function handleSelect(e){
        setInput({
              ...input,
            temperament: [...input.temperament, e.target.value] 
        })
        
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(input);
        dispatch(postBreed(input));
        alert("You already created your puppy!")
        setInput({
            name: "",
            height: "",
            weight: "",
            life_span: "",
            image:"",
            temperament: []
        })
        e.target.reset();
        history.push('/home') // redirecciona al home
    }

    function handleDelete(el){
        setInput({
            ...input,
            temperament: input.temperament.filter(temp => temp !== el)
        })
    }

    useEffect(() => {
        dispatch(getTemperaments());
        
    }, [dispatch]);

    return(
        <div className='breed-main-container'>
            <nav className='breed-nav'>
                <div className='breed-titles'>
                    <h1>Enter your puppy's data:</h1>
                </div>
                <Link to='/home'><button className='create-btn'>Go back home</button></Link>

            </nav>

            


            
            <div className='flex-container'>
            <form onSubmit={(e) => handleSubmit(e)} className='form'>
                <div className='form__section'>
                    
                    <input
                    key={input.name}
                    type="text"
                    value={input.name}
                    name="name"
                    required
                    placeholder="Name"
                    onChange={(e) => handleChange(e)}
                    className='form__input'
                    />
                    {errors.name && (
                        <p>{errors.name}</p>
                    )}
                </div>
                <div className='form__section'>
                    
                

                    <input
                    type="text"
                    value={input.height}
                    name="height"
                    pattern="[0-9]{1,2}[ ][-][ ][0-9]{1,2}"
                    required
                    title="Height must have a maximum value followed by space - space ( - ) and a minimum value"
                    placeholder="Height... e.g: 20 - 35"
                    onChange={(e) => handleChange(e)}
                    className='form__input'
                    />
                    {errors.height && (
                        <p>{errors.height}</p>
                    )}

                </div>
                
                
                
                <div className='form__section'>
                
                    <input
                    type="text"
                    value={input.weight}
                    name="weight"
                    pattern="[0-9]{1,2}[ ][-][ ][0-9]{1,2}"
                    required
                    title="Weight must have a maximum value followed by space - space ( - ) and a minimum value"
                    placeholder="Weight... e.g: 1 - 95"
                    onChange={(e) => handleChange(e)}
                    className='form__input'
                    />
                    {errors.weight && (
                        <p>{errors.weight}</p>
                    )}

                </div>

                

                <div className='form__section'>
                    
                    <input
                    type="text"
                    value={input.life_span}
                    name="life_span"
                    pattern="[0-9]{1,2}[ ][-][ ][0-9]{1,2}"
                    required
                    title="Life span must have a maximum value followed by space - space ( - ) and a minimum value"
                    placeholder="Life span... e.g: 5 - 16"
                    onChange={(e)=> handleChange(e)}
                    className='form__input'
                    

                    />
                    
                    {errors.life_span && (
                        <p>{errors.life_span}</p>
                    )}

                </div>
                <div className='form__section'>
                    
                    <input
                    type="text"
                    value={input.image}
                    name="image"
                    placeholder="Image... https://..."
                    onChange={(e)=> handleChange(e)}
                    className='form__input'
                    />

                </div>
                <div className='form__section'>
                    <h4>Choose one or more temperaments</h4>
                    <select onChange={(e) => handleSelect(e)} className='form__input' >
                        {temperaments.map((temp) => {
                        return <option value={temp.name} className='form__input'>{temp.name}</option>
                        })

                        }
                    </select>
                    <ul>{input.temperament.map(el => el + ", ")}</ul>
                </div>
                
                <div className='delete-container'>
                    {input.temperament.map(el => 
                        <div>
                            <p>{el}</p>
                            <button className='delete-btn' onClick={() => handleDelete(el)}>x</button>
                        </div>

                    )}
                </div>
                
                
                <button type='submit' className='create-btn'>Ready!</button>
            
            </form>
            <div className='form-img'>
                <div className='img-container'>
                    <div>
                        <img src="https://cdn.redcanina.es/wp-content/uploads/2019/08/06102328/razas-de-perros.jpg" alt="" />

                    </div>

                </div>

            </div>

            

        </div>

        </div>
        
        
    )
}