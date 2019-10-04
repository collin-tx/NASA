import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div id="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/apod">APOD</NavLink>
            <NavLink to="/epic">EPIC</NavLink>
        </div>
    );
}

export default Nav;
