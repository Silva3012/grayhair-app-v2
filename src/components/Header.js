import React from 'react';
import '../styles/Header.css';
import logo from '../images/logo_black.png';

//Creating a functional component and passing a props parameter to the function
function Header(props) {
    return (
        <div className='header'>
        {/* Company logo */}
            <div className='logo'>
                <img src={logo} alt='Company-Logo' />
            </div>
                {/* Company name */}
                <div className='company-name'>
                    <h1>GRAYHAIR CLOTHING</h1>
                </div>
            {/* Conditional rendering based on loggedIn prop */}
            <div className='user-greeting'>
                {props.loggedIn ? <p>Welcome to GrayHair</p> : <p>Please Sign In</p>}
            </div>
        </div>
    );
}

export default Header;