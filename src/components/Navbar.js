import React from 'react';
import '../styles/Navbar.css';
import { Outlet } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <nav className="navbar">
            <div className="logo-container">
                <img src="https://cdn-icons-png.flaticon.com/128/4939/4939576.png" alt="App Logo" />
            </div>
            <div className="brand">Habit Tracker</div>
        </nav>
        <Outlet/>
        </>
        
    );
};

export default Navbar;