import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar_home.css';

const Navbar_home = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <Link to="/">Logo</Link>
                </div>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/user" className="nav-link">User</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/train" className="nav-link">Train</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/bookinglist" className="nav-link">Booking List</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar_home;