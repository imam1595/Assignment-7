import React, { useContext } from 'react';
import { LogContext } from '../../context/LogContext';
import LogCard from '../../ui/LogCard';

const TimeLinePage = () => {


    const {logs} = useContext(LogContext);
    console.log(logs);

    return (
        <div className='container mx-auto'>
            <h1 className='text-3xl font-bold'>Timeline</h1>
            
            {
                logs.length === 0 ?
                    (
                        <div className='flex justify-center items-center'>
                            <h1 className='font-bold text-2xl'>No data found</h1>
                        </div>
                    )   :
                    (
                        <div className='space-y-10 mt-10'>
                            {
                                logs.map((log) => <LogCard key={log.id} log={log} />)
                            }
                        </div>
                    )
            }
            
        </div>
    );
};

export default TimeLinePage;