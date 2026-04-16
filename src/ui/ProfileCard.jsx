import React, { useContext } from 'react';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { BsChatLeftText } from 'react-icons/bs';
import { FaArchive } from 'react-icons/fa';
import { GoDeviceCameraVideo } from 'react-icons/go';
import { IoIosNotifications } from 'react-icons/io';
import { RiDeleteBin7Line } from 'react-icons/ri';
import { LogContext } from '../context/LogContext';

const ProfileCard = ({expectedData}) => {

    const {logs, setLogs} = useContext(LogContext);
    // console.log(logs, typeof(logs));

    // const ara = useContext(LogContext);
    // console.log(ara);

    const logsHandler = (type) => {
        const newLog = {
        id: Date.now(),
        person: expectedData,
        action: type, // 'call' | 'text' | 'video'
        time: new Date().toISOString()
    };

    setLogs([...logs, newLog]);
    }

    // console.log(logs);

    return (
        <div className='md:grid md:grid-cols-3 lg:grid-cols-3 md:gap-10 lg:10'>

            
            <div className='space-y-10 mb-10'>
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
                <div className='space-y-8'>

                    <button className='btn btn-soft text-xl font-semibold w-full'>
                        <IoIosNotifications />
                        Snooze 2 Week
                    </button>

                    <button className='btn btn-soft text-xl font-semibold w-full'>
                        <FaArchive />
                        Archive
                    </button>

                    <button className='btn btn-soft text-red-300 text-xl font-semibold w-full'>
                        <RiDeleteBin7Line />
                        Delete
                    </button>

                </div>

            </div>
            

            <div className='space-y-10 md:col-span-2 lg:col-span-2'>

                <div className='space-y-8 font-bold text-xl flex flex-col items-center md:flex-row md:justify-between md:text-sm lg:flex-row lg:justify-between'>

                    <div className="card bg-base-100 shadow-2xl items-center text-center p-10 h-35 w-80 md:h-30 md:w-60">
                        <h3>{expectedData.days_since_contact}</h3>
                        <p>Day Since Contact</p>
                    </div>

                    <div className='card bg-base-100 shadow-2xl items-center text-center p-10 h-35 w-80 md:h-30 md:w-60'>
                        <h3>{expectedData.goal}</h3>
                        <p>Goal (Days)</p>
                    </div>

                    <div className='card bg-base-100 shadow-2xl items-center text-center p-10 h-35 w-80 md:h-30 md:w-60'>
                        <h3>{expectedData.next_due_date}</h3>
                        <p>Next Due</p>
                    </div>
                    
                </div>

                <div className='card bg-base-100 shadow-2xl items-center text-center p-10 font-bold text-xl space-y-5'>

                    <div className='flex justify-between items-center bg-accent'>
                        <h1>Relationship Goal</h1>
                        <button className='btn'>Edit</button>
                    </div>

                    <p>Connect every {expectedData.days_since_contact} days</p>

                </div>

                <div className='card bg-base-100 shadow-2xl items-center text-center p-10 font-bold text-xl space-y-5'>

                    <h2 className='lg:text-start'>Quick Cheek-in</h2>
                    <div className='flex flex-col gap-10 md:flex-row lg:flex-row'>
                        
                        <button className='btn p-10' onClick={() => logsHandler('Call')}>
                            <BiSolidPhoneCall />
                            <p>Call</p>
                        </button>

                        <button className='btn p-10' onClick={() => logsHandler('Text')}>
                            <BsChatLeftText />
                            <p>Text</p>
                        </button>

                        <button className='btn p-10' onClick={() => logsHandler('Video')}>
                            <GoDeviceCameraVideo />
                            <p>Video</p>
                        </button>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProfileCard;