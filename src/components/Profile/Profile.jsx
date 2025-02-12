import React, { useContext } from 'react';
import { authContext } from '../Root/Root';

const Profile = () => {
    const {user} = useContext(authContext)
    console.log(user)
    return (
        <div>
            I am Profile
            <h3>{user?.email}</h3>
        </div>
    );
};

export default Profile;