import React from 'react';
import callImg from '../assets/call.png';
import textImg from '../assets/text.png';
import videoImg from '../assets/video.png'

const LogCard = ({log}) => {
    return (
        <div key={log.id} className="flex items-center gap-3 shadow-xl p-10">

            <img src={log.action === 'Call' ? callImg : log.action === 'Text' ? textImg : videoImg} alt={log.action} className='w-12 h-12 object-cover rounded-full' />

            <div>
                <h2 className="font-bold text-xl">{`${log.action} with ${log.person.name}`}</h2>
                <p className="text-sm text-gray-500">
                    {new Date(log.time).toLocaleString()}
                </p>
            </div>

            
        </div>
    );
};

export default LogCard;