import React from "react";

import { FaFire, FaGrinAlt, FaGrinHearts, FaSadCry, FaSignOutAlt, FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar(props) {
    return (
        <>
            {/* THIS ONE IS FAKE */}
            <div className='navbar' style={{ position: "unset" }}>
                <Link to='/home' className='navbar-option'>
                    <FaFire></FaFire>
                </Link>
                {/* <a href='https://google.com' className='navbar-option'>
                    <FaGrinHearts></FaGrinHearts>
                    <h1>Pickups</h1>
                </a> */}
                <Link to='/create' className='navbar-option'>
                    <FaPen></FaPen>
                    <h1>Create</h1>
                </Link>
            </div>
            <div className='navbar' style={{ zIndex: 10 }}>
                <Link to='/home' className='navbar-option'>
                    <FaFire></FaFire>
                </Link>
                {/* <a href='https://google.com' className='navbar-option'>
                    <FaGrinHearts></FaGrinHearts>
                    <h1>Pickups</h1>
                </a> */}
                <Link to='/create' className='navbar-option'>
                    <FaPen></FaPen>
                    <h1>Create</h1>
                </Link>
                <div style={{ flex: 1 }}></div>
                <Link to='/signout' className='navbar-option'>
                    <FaSignOutAlt></FaSignOutAlt>
                </Link>
            </div>
        </>
    );
}

export default Navbar;
