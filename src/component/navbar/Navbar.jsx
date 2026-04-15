import React from 'react';
import { ImStatsDots } from 'react-icons/im';
import { IoHome } from 'react-icons/io5';
import { RiTimeLine } from 'react-icons/ri';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        
        <div className='flex flex-col justify-center gap-5 items-center md:flex-row md:justify-between  lg:flex-row lg:justify-between shadow min-h-[10vh] p-5'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold'>Keen<span>Keeper</span></h1>
            <div className='flex gap-8'>
                <NavLink 
                    to='/'
                    className={({ isActive }) =>
                        `flex justify-center items-center font-semibold btn ${isActive ? 'btn-accent' : ''}`
                    }
                >
                    <IoHome />
                    Home
                </NavLink>

                <NavLink 
                    to='/timeline'
                    className={({ isActive }) =>
                        `flex justify-center items-center font-semibold btn ${isActive ? 'btn-accent' : ''}`
                    }
                >
                    <RiTimeLine />
                    Timeline
                </NavLink>

                <NavLink
                    to='/stats'
                    className={({ isActive }) =>
                        `flex justify-center items-center font-semibold btn ${isActive ? 'btn-accent' : ''}`
                    }
                >
                    <ImStatsDots />
                    Stats
                </NavLink>
            </div>
        </div>
    
    );
};

export default Navbar;