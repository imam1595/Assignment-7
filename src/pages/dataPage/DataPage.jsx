import React from 'react';
import useDatum from '../../hooks/useDatum';
import Card from '../../ui/Card';

const DataPage = () => {
    const {datum, loading} = useDatum();
    console.log(datum, loading);
    return (
        <div>
            data page {datum.length}

            <div>some box</div>
            <div>
                {
                    datum.map((data) => <Card key={data.id} data={data} />)
                }
            </div>
        </div>
    );
};

export default DataPage;