import React from 'react';
import { FaFacebook, FaInstagramSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-[#244D3F] min-h-[40vh]'>
            <div className='container mx-auto text-white space-y-4 text-center flex flex-col p-10'>
                <div className='space-y-7'>

                    <h1 className='text-3xl font-bold md:text-4xl lg:text-5xl'>KeenKeeper</h1>
                    <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    <div className='flex flex-col items-center gap-3'>

                        <h1 className='font-bold text-xl'>Social Links</h1>
                        <div className='flex gap-3'>
                            <FaInstagramSquare />
                            <FaFacebook />
                            <FaXTwitter />
                        </div>
                    </div>
                </div>
                <hr />

                <div className='space-y-5 md:flex md:justify-between md:items-center md:p-5 lg:flex lg:justify-between lg:items-center lg:p-5'>
                    <p>© 2026 KeenKeeper. All rights reserved.</p>

                    <div className='md:flex md:justify-between md:items-center md:gap-7 lg:flex lg:justify-between lg:items-center lg:gap-7'>
                        <h1>Privacy Policy</h1>
                        <h1>Terms of Service</h1>
                        <h1>Cookies</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;