import React from 'react';
import { useParams } from 'react-router';
import useDatum from '../../hooks/useDatum';
import ProfileCard from '../../ui/ProfileCard';
import LoadingCard from '../../ui/LoadingCard';

const ProfilePage = () => {
    const {id} = useParams();
    // console.log(id)

    const {datum, loading} = useDatum();
    // console.log(datum, loading);

    const expectedData = datum.find(data => data.id == id);
    // console.log(expectedData);

    return (
        <div className='container mx-auto'>
            

            {
                loading ?
                    (
                        <div className='flex justify-center items-center min-h-[50vh]'>
                            <LoadingCard />
                        </div>
                    )   :

                    (
                        <ProfileCard expectedData={expectedData}/>
                    )
            }


        </div>
    );
};

export default ProfilePage;