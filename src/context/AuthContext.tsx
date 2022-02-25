import React from 'react';

export const AuthContext = React.createContext({
    usersignIn: (res: any) => { },
    usersignOut: () => { },
});
