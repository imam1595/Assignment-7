import React from 'react';
import { FaArchive } from 'react-icons/fa';
import { IoIosNotifications } from 'react-icons/io';
import { RiDeleteBin7Line } from 'react-icons/ri';

const ProfileCard = ({expectedData}) => {
    return (
        <div>

            <div>

                <div>
                    {/* // imag card */}
                    <div className="card bg-base-100 shadow-2xl items-center text-center p-10 h-100">
                        <figure>
                            <img
                            src={expectedData.picture}
                            alt="pic" 
                            className='w-full h-50 object-cover'
                            />
                        </figure>
                        <div className="card-body items-center">
                            <h2 className="card-title">{expectedData.name}</h2>

                            <h2 className={`text-white font-bold w-fit px-2 rounded ${expectedData.status === 'on-track' ? 'bg-green-500' : expectedData.status === 'almost-due' ? 'bg-orange-500' : 'bg-red-500'}`}>{expectedData.status}</h2>

                            <div className="flex gap-2 flex-wrap justify-center">
                                {expectedData.tags.map((tag, index) => (
                                    <span key={index} className="bg-blue-400 p-1 rounded text-white font-bold">{tag}</span>
                                ))}
                            </div>

                            <p>{expectedData.bio}</p>
                            <h3 className='font-semibold'>{expectedData.email}</h3>

                            
                        </div>
                    </div>
                    {/* // 3 button */}
                    <div>
                            <button className='btn btn-ghost text-xl font-semibold w-full'>
                                <IoIosNotifications />
                                Snooze 2 Week
                            </button>

                            <button className='btn btn-ghost text-xl font-semibold w-full'>
                                <FaArchive />
                                Archive
                            </button>

                            <button className='btn btn-ghost text-red-300 text-xl font-semibold w-full'>
                                <RiDeleteBin7Line />
                                Delete
                            </button>
                    </div>

                </div>
            </div>

            <div></div>
        </div>
    );
};

export default ProfileCard;