import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar_home.css';

const Navbar_home = () => {
    return (
        <div className='navbar'>
            <div className='logo'>MyApp</div>
            <div className='nav-links'>
            <h3>USER</h3>
            <h3>Train</h3>
            <h3>Booking</h3>
            </div>  
         
        </div>
    );
};

export default Navbar_home;