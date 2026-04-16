import React, { useContext, useState } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { LogContext } from '../../context/LogContext';


const StatsPage = () => {

    const {logs} = useContext(LogContext);
    console.log(logs, typeof(logs));

    const callCount = logs.filter(log => log.action === 'Call').length;
    const textCount = logs.filter(log => log.action === 'Text').length;
    const videoCount = logs.filter(log => log.action === 'Video').length;

    const data = [
        { name: 'Call', value: callCount, fill: '#0088FE' },
        { name: 'Text', value: textCount, fill: '#00C49F' },
        { name: 'Video', value: videoCount, fill: '#FFBB28' },
    ];

    return (
        <div className='container mx-auto'>

            <h1 className='font-bold text-4xl'>Friendship Analytics</h1>

            <div className='shadow-xl p-5'>

                <h3>By Interaction Type</h3>

                <div className='flex justify-center'>
                    {
                        logs.length === 0 ?
                            (
                                <div className='flex justify-center items-center'>
                                    <h1 className='font-bold text-2xl'>No data found</h1>
                                </div>
                            )   :
                            (
                                <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                                    <Pie
                                        data={data}
                                        innerRadius="80%"
                                        outerRadius="100%"
                                        // Corner radius is the rounded edge of each pie slice
                                        cornerRadius="50%"
                                        fill="#8884d8"
                                        // padding angle is the gap between each pie slice
                                        paddingAngle={5}
                                        dataKey="value"
                                        isAnimationActive={true}
                                    />

                                    <Legend />
                                    <Tooltip />
                                    
                                </PieChart>
                            )
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default StatsPage;