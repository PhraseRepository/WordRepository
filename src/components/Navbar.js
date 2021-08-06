import React from "react";

import { FaFire, FaGrinAlt, FaGrinHearts, FaSadCry, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar(props) {
    return (
        <>
            <div className='navbar' style={{ position: "unset" }}>
                <Link to='/home' className='navbar-option'>
                    <FaFire></FaFire>
                </Link>
                <a href='https://google.com' className='navbar-option'>
                    <FaGrinAlt></FaGrinAlt>
                    <h1>Jokes</h1>
                </a>
                <a href='https://google.com' className='navbar-option'>
                    <FaGrinHearts></FaGrinHearts>
                    <h1>Pickups</h1>
                </a>
                <a href='https://google.com' className='navbar-option'>
                    <FaSadCry></FaSadCry>
                    <h1>Roasts</h1>
                </a>
            </div>
            <div className='navbar' style={{ zIndex: 10 }}>
                <Link to='/home' className='navbar-option'>
                    <FaFire></FaFire>
                </Link>
                <a href='https://google.com' className='navbar-option'>
                    <FaGrinAlt></FaGrinAlt>
                    <h1>Jokes</h1>
                </a>
                <a href='https://google.com' className='navbar-option'>
                    <FaGrinHearts></FaGrinHearts>
                    <h1>Pickups</h1>
                </a>
                <a href='https://google.com' className='navbar-option'>
                    <FaSadCry></FaSadCry>
                    <h1>Roasts</h1>
                </a>
                <div style={{ flex: 1 }}></div>
                <Link to='/signout' className='navbar-option'>
                    <FaSignOutAlt></FaSignOutAlt>
                </Link>
            </div>
        </>
    );
}

export default Navbar;
