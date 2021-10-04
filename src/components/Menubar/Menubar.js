import React from 'react';
import { NavLink } from 'react-router-dom';

const Menubar = () => {
    return (
        <div className="menubar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <h2>Learn<span className="text-info">Bridge</span></h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ms-auto">
                    <NavLink to="/home" activeStyle={{ color: 'black', fontSize: '1.3rem' }} className="nav-item text-decoration-none p-4 align-items-center">
                        <li>Home</li>
                    </NavLink>
                    <NavLink to="/about" activeStyle={{ color: 'black', fontSize: '1.3rem' }} className="nav-item  text-decoration-none p-4">
                        <li>About us</li>
                    </NavLink>
                    <NavLink to="/courses" activeStyle={{ color: 'black', fontSize: '1.3rem' }} className="nav-item text-decoration-none p-4">
                        <li>Courses</li>
                    </NavLink>
                    <NavLink to="/faq" activeStyle={{ color: 'black', fontSize: '1.3rem'}} className="nav-item text-decoration-none p-4">
                        <li>FAQs</li>
                    </NavLink>
                    <NavLink to="/contact" activeStyle={{ color: 'black', fontSize: '1.3rem' }} className="nav-item text-decoration-none p-4">
                        <li>Contact us</li>
                    </NavLink>
                    <NavLink to="/contact" className="nav-item text-decoration-none p-4">
                        <li className="btn btn-primary">Sign Up</li>
                    </NavLink>
                </ul>
                </div>
                </div>
            </nav>
        </div>
    );
};

export default Menubar;