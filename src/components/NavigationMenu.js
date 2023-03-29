import React from 'react';
import { Link } from 'react-router-dom'; //Import the Link component
import '../styles/NavigationMenu.css';

function NavigationMenu() {
    return (
        <nav className="navigation-menu">
            <ul>
                {/* Home page link */}
                <li>
                    <Link to='/'>Home</Link>
                </li>

                {/* User profile page link */}
                <li>
                    <Link to='/profile'>Profile</Link>
                </li>

                {/* Shopping page link */}
                <li>
                    <Link to='/shopping'>Shopping</Link>
                </li>

                {/* Legal page link */}
                <li>
                    <Link to='/legal'>Legal</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavigationMenu;