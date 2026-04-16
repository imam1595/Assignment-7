import React from 'react';
import useDatum from '../../hooks/useDatum';
import Card from '../../ui/Card';
import LoadingCard from '../../ui/LoadingCard';

const DataPage = () => {
    const {datum, loading} = useDatum();
    // console.log(datum, loading);
    return (
        <div>
            {/* data page {datum.length} */}

            

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 overflow-hidden'>

                <div className='text-center shadow-xl p-10 font-bold'>
                    <h5>10</h5>
                    <span>Total Friends</span>
                </div>

                <div className='text-center shadow-xl p-10 font-bold'>
                    <h5>4</h5>
                    <span>On Track</span>
                </div>

                <div className='text-center shadow-xl p-10 font-bold'>
                    <h5>6</h5>
                    <span>Need Attention</span>
                </div>

                <div className='text-center shadow-xl p-10 font-bold'>
                    <h5>12</h5>
                    <span>Interactions This Month</span>
                </div>
                {
                    loading ?
                         (
                            <div className='flex justify-center items-center min-h-[50vh]'>
                                <LoadingCard />
                            </div>
                        )
                            :
                        (
                            
                             datum.map((data) => <Card key={data.id} data={data} />)
                
                        )
                }
            </div>
        </div>
    );
};

export default DataPage;