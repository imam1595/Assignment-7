import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Outlet } from 'react-router';
import Navbar from '../component/navbar/Navbar';
import Footer from '../component/footer/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
            <ToastContainer />
        </div>
    );
};

export default RootLayout;