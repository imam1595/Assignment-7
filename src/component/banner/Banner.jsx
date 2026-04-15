import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='flex flex-col items-center min-h-[50vh]'>
            <div className='text-center space-y-8 mt-10'>

                <h1 className='font-bold text-3xl md:text-5xl lg:text-5xl'>Friends to keep close in your life</h1>
                <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the
relationships that matter most.</p>

            <div className='flex justify-center'>
                <button className='flex justify-center items-center btn btn-accent'>
                    <FaPlus />
                    Add a Friend
                </button>
            </div>
            </div>

            <div className='flex flex-col gap-10 md:flex-row lg:flex-row font-bold text-2xl mt-10'>
                <div className='text-center shadow-xl p-10'>
                    <h5>10</h5>
                    <span>Total Friends</span>
                </div>

                <div className='text-center shadow-xl p-10'>
                    <h5>3</h5>
                    <span>On Track</span>
                </div>

                <div className='text-center shadow-xl p-10'>
                    <h5>6</h5>
                    <span>Need Attention</span>
                </div>

                <div className='text-center shadow-xl p-10'>
                    <h5>12</h5>
                    <span>Interactions This Month</span>
                </div>
            </div>
        </div>
    );
};

export default Banner;