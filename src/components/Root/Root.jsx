import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
export const authContext = createContext();
import {
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import { auth } from "../../firebase.init";

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

  const authData = {
    handleGoogleLogin,
    handleGithubLogin
  }

  useEffect(()=>{
    console.log('user State',user)
  },[user])

  return (
    <div>
      <h1>hey i am the main layout</h1>
      <authContext.Provider value={authData}>
        <Outlet></Outlet>
      </authContext.Provider>
    </div>
  );
};

export default Root;
