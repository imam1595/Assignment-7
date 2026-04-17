import React from 'react';
import callImg from '../assets/call.png';
import textImg from '../assets/text.png';
import videoImg from '../assets/video.png'

const LogCard = ({filterLog}) => {
    return (
        <div key={filterLog.id} className="flex items-center gap-3 shadow-xl p-10">

            <img src={filterLog.action === 'Call' ? callImg : filterLog.action === 'Text' ? textImg : videoImg} alt={filterLog.action} className='w-12 h-12 object-cover rounded-full' />

            <div>
                <h2 className="font-bold text-xl">{`${filterLog.action} with ${filterLog.person.name}`}</h2>
                <p className="text-sm text-gray-500">
                    {new Date(filterLog.time).toLocaleString()}
                </p>
            </div>

            
        </div>
    );
};

export default LogCard;