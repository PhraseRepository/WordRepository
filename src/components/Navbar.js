import React from "react";

import { FaBeer, FaFire, FaGrinAlt, FaGrinHearts, FaSadCry } from "react-icons/fa";

function Navbar(props) {
    return (
        <>
            <div className='navbar' style={{ position: "unset" }}>
                <a href='https://google.com' className='navbar-option'>
                    <FaFire></FaFire>
                </a>
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
                <a href='https://google.com' className='navbar-option'>
                    <FaFire></FaFire>
                </a>
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
        </>
    );
}

export default Navbar;
