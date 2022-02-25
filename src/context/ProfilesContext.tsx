import React, { useState } from "react";

export const ProfilesContext: any = React.createContext({});

export const ProfilesProvider = ({ children }: any) => {

    const [signUpUserDetails, setSignUpUserDetails] = useState([]);
    const [loggedInUserDetails, setLoggedInUserDetails] = useState([

    ]);
    const [userToken, setUserToken] = useState('');

    return (
        <ProfilesContext.Provider value={{
            signUpUserDetails, setSignUpUserDetails,
            loggedInUserDetails, setLoggedInUserDetails
        }}>
            {children}
        </ProfilesContext.Provider>
    );
};
