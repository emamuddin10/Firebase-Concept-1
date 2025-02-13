import React, { useContext } from "react";
import { authContext } from "../Root/Root";
import { Link } from "react-router-dom";

const SignUp = () => {
    const {handleSignUp}=useContext(authContext)
    const handleSubmit=(e)=>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const confirmPass = e.target.confirmPass.value
        if(password.length <6){
            alert('please enter at least 6 disits')
            return
        }
        if(password !=confirmPass){
            alert('password didnt macth')
            return
        }
        if(!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(password)){
          alert('password is not valid')
          return
        }
        console.log(email,password,confirmPass)
        handleSignUp(email,password)
    }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <fieldset className="fieldset">
              <label className="fieldset-label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" />
              <label className="fieldset-label">Password</label>
              <input type="password" name='password' className="input" placeholder="Password" />
              <label className="fieldset-label">Confirm Password</label>
              <input type="password" name="confirmPass" className="input" placeholder="Confirm Password" />
              
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
            <p>If you have already account please <button className='btn btn-info'><Link to='/login'>Login</Link></button></p>

          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
