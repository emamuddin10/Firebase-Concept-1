import React from 'react';
import { Outlet } from 'react-router-dom';

const About = () => {
    return (
        <div>
            This is about
            <Outlet></Outlet>
        </div>
    );
};

export default About;