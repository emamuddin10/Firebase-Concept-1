import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
export const authContext = createContext();
import {GoogleAuthProvider,signInWithPopup,GithubAuthProvider,onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.init";
import Navbar from "../Navbar/Navbar";

const Root = () => {
  const  [user, setuser] = useState(null)
  console.log(user)

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setuser(result.user);
      })
      .catch((error) => {
        console.log("Error", error.message);
      });
  };

  const handleGithubLogin = () => {
    console.log('handle clicked')
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        setuser(result.user);
      })
      .catch((error) => {
        console.log("Error", error.message);
      });
  };



  const handleLogOut=()=>{
    signOut(auth)
    .then(res=>{
      console.log(res)
    })
  }

  useEffect(()=>{
    console.log('user State',user)
  },[user])
  useEffect(()=>{
    const unSubscribe= onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser)
      // if (user) {
      //   // User is signed in, see docs for a list of available properties
      //   // https://firebase.google.com/docs/reference/js/auth.user
      //   const uid = user.uid;
      //   // ...
      // } else {
      //   // User is signed out
      //   // ...
      // }
    });
    return ()=>{
      unSubscribe()
    }
  },[])
  const handleSignUp=(email,password)=>{
    createUserWithEmailAndPassword(auth, email, password)
    .then(result=>{
      console.log(result.user)
    })
  }
  const handleLogIn=(email,password)=>{
    signInWithEmailAndPassword(auth, email, password)
    .then(result=>{
      console.log(result.user)
    })
  }

  const authData = {
    handleGoogleLogin,
    handleGithubLogin,
    handleLogOut,
    user,
    handleSignUp,
    handleLogIn
  }

  return (
    <div>
      <h1>hey i am the main layout</h1>
      <authContext.Provider value={authData}>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </authContext.Provider>
    </div>
  );
};

export default Root;
