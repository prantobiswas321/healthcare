import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';

export const authcontext = createContext();
const AuthProvider = ({ children }) => {

    const allContext = useFirebase();
    return (
        <authcontext.Provider value={allContext}>
            {children}
        </authcontext.Provider>
    );
};

export default AuthProvider;