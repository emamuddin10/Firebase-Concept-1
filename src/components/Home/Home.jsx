import React from 'react';
import { GoogleAuthProvider,signInWithPopup,GithubAuthProvider  } from "firebase/auth";
import { auth } from '../../firebase.init';

const Home = () => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const handleGoogleLogin=()=>{
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log('Error',error.message)
        })

    }
    const handleGithubLogin=()=>{
        signInWithPopup(auth, githubProvider)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log('Error',error.message)
        })

    }
    return (
        <div>
            <button className='btn' onClick={handleGoogleLogin}>Google Login </button>
            <button className='btn' onClick={handleGithubLogin}>Github Login </button>
        </div>
    );
};

export default Home;