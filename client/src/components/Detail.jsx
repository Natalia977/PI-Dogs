import React from "react";
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getDetail} from '../actions/index';
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Detail.css";

export default function Detail(props){
    console.log(props.match.params.id);
    const dispatch = useDispatch();

    const {id} = useParams();

    useEffect(() => {
        dispatch(getDetail(id));
    }, [id, dispatch])

    const breedDetails = useSelector((state) => state.detail );
    console.log('detalles de la raza',breedDetails)

    return(
        <div className='main-container-detail'>
            {
                breedDetails.length?
                <div className='card-container-detail'>
                    <div className='img-detail-container'>
                        <img className='img-styles' height="200px" width="270px" src={breedDetails[0].reference_image_id? ('https://cdn2.thedogapi.com/images/'+ breedDetails[0]?.reference_image_id +'.jpg') : 'image not found' } alt="" />

                    </div>
                    <div className='data-breed-detail'>
                        <h2>{breedDetails[0].name? breedDetails[0].name : '-'}</h2>
                        <h3>Height: {breedDetails[0].height.metric? breedDetails[0].height.metric : '-'} cm</h3>
                        <h3>Weight: {breedDetails[0].weight.metric? breedDetails[0].weight.metric : '-'} kg</h3>
                        <h3>Life_span: {breedDetails[0].life_span? breedDetails[0].life_span : '-'}</h3>
                        <h4>Origin: {breedDetails[0].origin? breedDetails[0].origin : '-' }  </h4>
                        <h4>Temperament: {breedDetails[0].temperament? breedDetails[0].temperament : '-'}</h4>
                        </div>

                </div> :
                
                
                <div>
                    <div className='img-detail-container'>
                        <img className='img-styles' src={breedDetails.image } alt="" />

                    </div>
                    
                    <div className='data-breed'>
                        <h2>{breedDetails?.name}</h2>
                        <h3>Height: {breedDetails.height} cm</h3>
                        <h3>Weight: {breedDetails.weight} kg</h3>
                        <h3>Life_span: {breedDetails.life_span}</h3>
                        <h3>Origin: {breedDetails.origin}</h3>
                        <h4>Temperaments: {breedDetails.temperament}</h4>
                    </div>
                    
                
                </div> 

                
            }
            
            
            <Link to='/home'>
                <button className='go-back-btn'>Go Back</button>
            </Link>
                 
        </div>
    )
}