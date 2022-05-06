import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {name, img, description, price} = service;

    const navigate = useNavigate();
    const navigateServiceDetails = name => {
        navigate(`/service/${name}`)
    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price : {price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateServiceDetails(name)} className='btn btn-primary w-100'>Book Now</button>
        </div>
    );
};

export default Service;