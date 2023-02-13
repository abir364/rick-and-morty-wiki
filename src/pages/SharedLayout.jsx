import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './SharedLayout.css';

const SharedLayout = () => {
    return (
        <div className="shared">
            <Link to="/"><img className='logo' src="src\assets\Logo.png" alt="Logo"/></Link>
            <Outlet />
        </div>
    );
}

export default SharedLayout;