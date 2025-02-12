import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { authContext } from '../Root/Root';

const Navbar = () => {
    const {handleLogOut}=useContext(authContext)
    return (
        <div className='flex gap-10 p-4'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/signUp'>SignUp</NavLink>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/profile'>Profile</NavLink>
            <button onClick={handleLogOut}>Log Out</button>
        </div>
    );
};

export default Navbar;