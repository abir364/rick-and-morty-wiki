import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

import logo from "../assets/Logo.png";
import './SharedLayout.css';

const SharedLayout = () => {
    return (
        <div className="shared">
            <Link to="/"><img className='logo' src={logo} alt="Logo"/></Link>
            <Outlet />
        </div>
    );
}

export default SharedLayout;