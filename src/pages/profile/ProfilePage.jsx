import React from 'react';
import { useParams } from 'react-router';

const ProfilePage = () => {
    const {id} = useParams();
    return (
        <div>
            profile dynamic--{id}
        </div>
    );
};

export default ProfilePage;