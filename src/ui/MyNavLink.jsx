import React from 'react';
import { NavLink } from 'react-router';

const MyNavLink = ({to, children}) => {
    return (
        <NavLink 
            to={to}
            className={({isActive}) =>
                `flex justify-center items-center font-semibold btn ${isActive ? 'btn-accent' : ''}`
            }
        >
            {children}
        </NavLink>
    );
};

export default MyNavLink;