import React from 'react';
import { MoonLoader } from 'react-spinners';

const LoadingCard = () => {
    return (
        
        <h1 className='text-accent text-2xl font-bold'><MoonLoader color="#14B8A6"/> Please wait</h1>
    );
};

export default LoadingCard;