import React from "react";

import { FaBeer } from "react-icons/fa";

function Navbar(props) {
    return (
        <div className='navbar'>
            <a href='https://google.com' className='navbar-option'>
                <FaBeer></FaBeer>
            </a>
            <a href='https://google.com' className='navbar-option'>
                <FaBeer></FaBeer>
            </a>
            <a href='https://google.com' className='navbar-option'>
                <FaBeer></FaBeer>
            </a>
            <a href='https://google.com' className='navbar-option'>
                <FaBeer></FaBeer>
            </a>
        </div>
    );
}

export default Navbar;
