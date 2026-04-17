import React, { useContext, useState } from 'react';
import { LogContext } from '../../context/LogContext';
import LogCard from '../../ui/LogCard';

const TimeLinePage = () => {


    const {logs} = useContext(LogContext);
    // console.log(logs);

    const [sortingType, setSortingType] = useState("All");

    let filterLogs = [];

    if(sortingType == "All") {
        filterLogs = logs;
    } else {
        filterLogs = logs.filter((log) => log.action == sortingType)
    };

    console.log(filterLogs);

    return (
        <div className='container mx-auto'>
            <h1 className='text-3xl font-bold'>Timeline</h1>

            <div className="dropdown dropdown-start">
            <div tabIndex={0} role="button" className="btn m-1">Sort by ⬇️</div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={() => setSortingType("Call")}>Call</a></li>

                    <li><a onClick={() => setSortingType("Text")}>Text</a></li>

                    <li><a onClick={() => setSortingType("Video")}>Video</a></li>

                    <li><a onClick={() => setSortingType("All")}>All</a></li>
                </ul>
            </div>
            
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
                                filterLogs.map((filterLog) => <LogCard key={filterLog.id} filterLog={filterLog} />)
                            }
                        </div>
                    )
            }
            
        </div>
    );
};

export default TimeLinePage;