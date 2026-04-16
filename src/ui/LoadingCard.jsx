import React from 'react';
import { MoonLoader } from 'react-spinners';

const LoadingCard = () => {
    return (
        
        <h1 className=' text-2xl font-bold'><MoonLoader /> Please wait</h1>
    );
};

export default LoadingCard;