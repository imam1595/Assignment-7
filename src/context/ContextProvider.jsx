import React from 'react';
import { LogContext } from './LogContext';

const ContextProvider = ({children}) => {
    return (
        <LogContext.Provider>
            {children}
        </LogContext.Provider>
    );
};

export default ContextProvider;