import React, { useEffect, useState } from 'react';

const useDatum = () => {
    const [datum, setDatum] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/friends.json');
            const data = await res.json();
            

            setTimeout(() => {
                setDatum(data);
                setLoading(false);
            }, 40000);
        };
        fetchData();
    }, [])

    return (
        {
            datum,
            loading
        }
    );
};

export default useDatum;