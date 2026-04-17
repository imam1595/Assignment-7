import React, { useContext } from 'react';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { BsChatLeftText } from 'react-icons/bs';
import { FaArchive } from 'react-icons/fa';
import { GoDeviceCameraVideo } from 'react-icons/go';
import { IoIosNotifications } from 'react-icons/io';
import { RiDeleteBin7Line } from 'react-icons/ri';
import { LogContext } from '../context/LogContext';
import { toast } from 'react-toastify';

const ProfileCard = ({expectedData}) => {

    const {logs, setLogs} = useContext(LogContext);
    // console.log(logs, typeof(logs));

    // const ara = useContext(LogContext);
    // console.log(ara);

    const logsHandler = (type) => {

        const newLog = {
            id: Date.now(),
            person: expectedData,
            action: type, 
            time: new Date().toISOString()
        };

        setLogs([...logs, newLog]);

        console.log(logs);
        console.log(newLog);


        // toast("Wow so easy!");

        toast.info(`${type} to ${newLog.person.name}`);
        

    }

    // console.log(logs);

    return (
        <div className='md:grid md:grid-cols-3 lg:grid-cols-3 md:gap-10 lg:gap-10'>

            
            <div className='space-y-10 mb-10'>

                {/* part-1 */}
                {/* // imag card */}
                <div className="card bg-base-100 shadow-2xl items-center text-center p-10">
                    <div className='w-40 object-cover'>
                        <img
                        src={expectedData.picture}
                        alt="pic" 
                        className='w-full h-full object-cover'
                        />
                    </div>
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
            
            {/* end of part-1 */}


            {/* part-2 */}

            <div className='space-y-18 md:col-span-2 lg:col-span-2'>

                <div className='space-y-8 font-bold text-xl flex flex-col items-center md:items-start lg:items-start md:flex-row md:justify-between md:text-sm lg:flex-row lg:justify-between'>

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

                <div className='flex justify-between bg-base-100 shadow-2xl p-10  space-y-5 h-50'>

                    <div className='flex flex-col justify-between'>
                        <h1 className='font-bold text-xl'>Relationship Goal</h1>
                        <p>Connect every  <span className='font-bold text-xl'> {expectedData.days_since_contact} days</span></p>
                    </div>

                    <button className='btn'>Edit</button>
                    

                </div>

                <div className='card bg-base-100 shadow-2xl items-center text-center md:items-start md:text-start lg:items-start lg:text-start p-10 font-bold text-xl space-y-5'>

                    <h2 className=''>Quick Cheek-in</h2>

                    <div className='flex flex-col gap-10 md:flex-row lg:flex-row'>
                        
                        <button className='btn p-4 md:p-6 lg:p-10' onClick={() => logsHandler('Call')}>
                            <BiSolidPhoneCall />
                            <p>Call</p>
                        </button>

                        <button className='btn p-4 md:p-6 lg:p-10' onClick={() => logsHandler('Text')}>
                            <BsChatLeftText />
                            <p>Text</p>
                        </button>

                        <button className='btn p-4 md:p-6 lg:p-10' onClick={() => logsHandler('Video')}>
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