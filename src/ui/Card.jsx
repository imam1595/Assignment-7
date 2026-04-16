import React from 'react';
import { Link } from 'react-router';

const Card = ({data}) => {
    return (
        <Link to={`/profile/${data.id}`}>
            <div className="card bg-base-100 shadow-2xl items-center text-center p-10 h-100">
                <figure>
                    <img
                    src={data.picture}
                    alt="pic" 
                    className='w-full h-50 object-cover'
                    />
                </figure>
                <div className="card-body items-center">
                    <h2 className="card-title">{data.name}</h2>

                    <h2>{data.goal} days</h2>

                    <div className="flex gap-2 flex-wrap justify-center">
                        {data.tags.map((tag, index) => (
                            <span key={index} className="bg-blue-400 p-1 rounded text-white font-bold">{tag}</span>
                        ))}
                    </div>

                    <h2 className={`text-white font-bold w-fit px-2 rounded ${data.status === 'on-track' ? 'bg-green-500' : data.status === 'almost-due' ? 'bg-orange-500' : 'bg-red-500'}`}>{data.status}</h2>
                </div>
            </div>
        </Link>
    );
};

export default Card;