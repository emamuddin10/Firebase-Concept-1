import React, { useContext } from 'react';
import { authContext } from '../Root/Root';
import { Link } from 'react-router-dom';

const Login = () => {
    const {handleLogIn}=useContext(authContext)
        const handleSubmit=(e)=>{
            e.preventDefault()
            const email = e.target.email.value
            const password = e.target.password.value
            handleLogIn(email,password)
           
           
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
                
                
                <button className="btn btn-success mt-4">Loginn</button>
              </fieldset>
              <p>If you new this website please <button className='btn btn-info'><Link to='/signUp'>Sign Up</Link></button></p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;