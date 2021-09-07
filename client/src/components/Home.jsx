import React, { Fragment } from "react";
import {useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {getBreeds, filterByTemperament, filterByBreed, orderByBreed} from "../actions";
import {Link} from "react-router-dom";
import Card from "./Card";
import Paginado from "./Paginado";

export default function Home(){
    const dispatch = useDispatch();
    const allBreeds = useSelector((state) => state.breeds);
    console.log(allBreeds)

    // estados locales para el paginado
    //      p actual      setea la p actual
    const [orden, setOrden] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [breedsPerPage, setBreedsPerPage] = useState(8);
    const indexOfLastBreed = currentPage * breedsPerPage;//8
    const indexOfFirstBreed = indexOfLastBreed - breedsPerPage;//0
    const currentBreeds = allBreeds.slice(indexOfFirstBreed, indexOfLastBreed);
    console.log("ultimo perro: " + indexOfLastBreed, "primer perro: " +  indexOfFirstBreed, "perros en la pagina:" + currentBreeds)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }


    useEffect(()=> {
        dispatch(getBreeds());
    }, [dispatch])
    
    function handleClick(e){
        e.preventDefault();
        dispatch(getBreeds())
    }

    function handleFilterByTemperament(e){
        //e.preventDefault();
        dispatch(filterByTemperament(e.target.value))
    }
    
    function handleFilterByBreed(e){
        e.preventDefault();
        dispatch(filterByBreed(e.target.value));
        
    }

    function handleOrderByBreed(e){
        e.preventDefault();
        dispatch(orderByBreed(e.target.value));
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    }

    
    return (
        <div>
            <Link to='/breeds'>
                <button className='boton_personalizado'>Crea tu perrito</button>    
            </Link>
            <h1>Solo para fanaticos de perritos</h1>
            <button onClick={e => {handleClick(e)}} className='boton_personalizado'>
                Volver a cargar todas las razas
            </button>
            <div>
                <select onChange={(e) => handleFilterByBreed(e)}>
                    <option value='all' >Existentes</option>
                    <option value='createdInDb'>Creados</option>
                </select>
                    
                <select onChange={e => {handleFilterByTemperament(e)}} >
                    <option value='all'>Todos los temperamentos</option>
                    <option value='name'>Por temperamento</option>
                </select>
                    
                    
                <select onChange={e => {handleOrderByBreed(e)}}>
                    <option value='asc'>A-Z</option>
                    <option value='des'>Z-A</option>
                </select>
                <select>
                    <option value='minToMax'>Menor a mayor</option>
                    <option value='maxToMin'>Mayor a menor</option>
                </select>

                <Paginado
                breedsPerPage={breedsPerPage}//8
                allBreeds={allBreeds.length}//
                paginado={paginado}
                />

                {
                    currentBreeds?.map((el) => {
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