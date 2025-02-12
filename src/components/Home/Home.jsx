import React, { useContext } from 'react';
import { authContext } from '../Root/Root';



const Home = () => {
   const contextValue = useContext(authContext)
   const {handleGoogleLogin,handleGithubLogin,handleLogOut}= contextValue
   console.log(contextValue)
    return (
        <div>
            <button className='btn' onClick={handleGoogleLogin}>Google Login </button>
            <button className='btn' onClick={handleGithubLogin}>Github Login </button>
            <button onClick={handleLogOut} className='btn'>Logout</button>
        </div>
    );
};

export default Home;