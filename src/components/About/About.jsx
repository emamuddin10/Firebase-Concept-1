import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { authContext } from '../Root/Root';

const About = () => {
    const {handleGoogleLogin,user}=useContext(authContext)
    return (
        <div>
            
            {user?.displayName}
            <button onClick={handleGoogleLogin} className='btn'>Google Login</button>
          
        </div>
    );
};

export default About;