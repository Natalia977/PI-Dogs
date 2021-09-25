
import {useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {getBreeds, filterBreedsByTemperament, filterCreatedDb, getTemperaments, orderByBreed, orderByWeight} from "../actions";
import {Link} from "react-router-dom";
import Card from "./Card";
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";
import './Home.css';



export default function Home(){
    const dispatch = useDispatch();
    const allBreeds = useSelector((state) => state.breeds);
    const [orden, setOrden] = useState(''); 
    const [currentPage, setCurrentPage] = useState(1);
    const [breedsPerPage, setBreedsPerPage] = useState(8);
    const temperaments = useSelector((state) => state.temperaments);
    const [input, setInput] = useState("")
    const indexOfLastBreed = currentPage * breedsPerPage;//8
    const indexOfFirstBreed = indexOfLastBreed - breedsPerPage;//0
    const currentBreeds = allBreeds.slice(indexOfFirstBreed, indexOfLastBreed);
    
    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }


    useEffect(()=> {
        dispatch(getBreeds());
        dispatch(getTemperaments());
    }, [dispatch])
    
    function handleClick(e){
        e.preventDefault();
        dispatch(getBreeds())
    }

    
    function handleSelect(e){
        setInput({
              ...input,
            temperament: e.target.value 
        })

        dispatch(filterBreedsByTemperament(e.target.value))
        
    }
    
    function handleOrderByBreed(e){
        e.preventDefault();
        dispatch(orderByBreed(e.target.value));
        setCurrentPage(1); //seteo la pagina en 1
        setOrden(`Ordenado ${e.target.value}`) //modifico el estado local para ordenar desde el front
    }

    function handleFilterCreatedDb(e){
        dispatch(filterCreatedDb(e.target.value))
    }

    function handleOrderByWeight(e){
        e.preventDefault();
        dispatch(orderByWeight(e.target.value));
        setCurrentPage(1); //seteo la pagina en 1
        setOrden(`Ordenado ${e.target.value}`) //modifico el estado local para ordenar desde el front
    }
   
  
    
    


    return (
        <div className='home-main-container'>
            
            <nav className='nav'>

                <div className='titles'>
                    <h1>DF!</h1>
                </div>
                <Link to='/about'>
                    <button className='nav-btn2'>
                         About
                    </button>
                
                </Link>
                <button className='nav-btn2' onClick={e => {handleClick(e)}}>
                    Reload all breeds
                </button>
                
                <Link to='/breed'>
                    <button className='nav-btn2'>Create your doggy</button>    
                </Link>
                
                <SearchBar/>

            </nav>
                
                <div className='secondary-container'>
                    <div className='filter'>
                    <div className='allBreeds'>
                        <label>Filter Breeds by:</label>
                        <select className='select-style' onChange={(e) => handleFilterCreatedDb(e)}>
                            <option value='all'>Existing</option>
                            <option value='createdInDb'>Created</option>
                        </select>
                    </div>
                    
                    
                    <div className='temp'>
                        <label>Choose one or more temperaments:</label>
                            <select className='select-style' onChange={(e) => handleSelect(e)}>
                            {temperaments?.map((temp) => {
                                return <option key={temp.name} value={temp.name}>{temp.name}</option>
                            })}
                            </select>
                    </div>
                        

                    </div>
                    
                    <div className='order'>
                        <div className='aZ'>
                            <label>Order by:</label>
                            <select className='select-style' onChange={e => {handleOrderByBreed(e)}}>
                                <option value='asc'>A-Z</option>
                                <option value='des'>Z-A</option>
                            </select>
                        </div>
                        
                        <div className='minMax'>
                            <label>Order by:</label>
                            <select className='select-style' onChange={e => {handleOrderByWeight(e)}}>
                                <option value='minToMax'>Lower to higher weight</option>
                                <option value='maxToMin'>Higher to lower weight</option>
                            </select>
                        </div>
                        

                    </div>
                            
                    
                    
                </div>   
                    
                    
            <div className='paginado'>
                    
                <Paginado
                breedsPerPage={breedsPerPage}
                allBreeds={allBreeds.length}
                paginado={paginado}
                />
            </div>
                    
            <div className='content-cards'>
                {
                    currentBreeds?.map((el) => {
                        return (
                            <div key={el.id} >
                               <Link className='link' to={"/home/" + el.id}>
                                 <Card 
                                 name={el.name} 
                                 temperament={el.temperament} 
                                 weight={el.weight.metric? el.weight.metric : el.weight } 
                                 life_span={el.life_span}
                                 origin={el.origin}
                                 image={el.image? el.image.url || el.image : ('https://cdn2.thedogapi.com/images/'+ el.reference_image_id +'.jpg')}
                                 key={el.id}/>
                               </Link>
                            </div>
                                    
                        )
                                        
                    })
                }

            </div>
               
                

        </div>
                
                
    )
                
}
   
    

    
    

    

   
    
    
    
    
    
    

            
             
                
                    

                

                
                
                

                

                                     


                        
                
                


