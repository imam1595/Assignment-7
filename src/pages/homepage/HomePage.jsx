import React from 'react';
import Banner from '../../component/banner/Banner';
import DataPage from '../dataPage/DataPage';

const HomePage = () => {
    return (
        <div className='container mx-auto'>
            <Banner />
            <DataPage />
        </div>
    );
};

export default HomePage;