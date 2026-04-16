import React, { useState } from 'react';
import { LogContext } from './LogContext';

const ContextProvider = ({children}) => {

    const [logs, setLogs] = useState([]);
    console.log(logs);

    const data = {
        logs,
        setLogs
    }

    return (
        <LogContext.Provider value={data}>
            {children}
        </LogContext.Provider>
    );
};

export default ContextProvider;