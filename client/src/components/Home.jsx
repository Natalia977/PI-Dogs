import React, { Fragment } from "react";
import {useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {getBreeds} from "../actions";
import {Link} from "react-router-dom";
import Card from "./Card";

export default function Home(){
    const dispatch = useDispatch();
    const allBreeds = useSelector((state) => state.breeds);

    useEffect(()=> {
        dispatch(getBreeds());
    }, [dispatch])
    
    function handleClick(e){
        e.preventDefault();
        dispatch(getBreeds())
    }
    
    return (
        <div>
            <Link to='/breeds'>Crea tu perrito</Link>
            <h1>Fans de los perritos!</h1>
            <button onClick={e => {handleClick(e)}}>
                Volver a cargar todas las razas
            </button>
            <div>
                <select>
                    <option value='all'>Todas las razas</option>
                    <option value='api'>Existente</option>
                    <option value='created'>Creados</option>
                </select>
                <select>
                    <option value='all'>Temperamentos</option>
                </select>
                <select>
                    <option value='A-Z'>A-Z</option>
                    <option value='Z-A'>Z-A</option>
                </select>
                <select>
                    <option value='minToMax'>Menor a mayor</option>
                    <option value='maxToMin'>Mayor a menor</option>
                </select>

                {
                    allBreeds?.map((el) => {
                        return (
                            <Fragment>
                               <Link to={"/home" + el.id}>
                                 <Card  name={el.name} temperament={el.temperament} weight={el.weight.metric} image={el.image.url}/>
                               </Link>


                            </Fragment>
                        )
                        
                    })
                }
                
            </div>
                

        </div>
    )
}