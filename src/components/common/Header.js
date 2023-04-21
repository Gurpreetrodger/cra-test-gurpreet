import React from 'react';
import  { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {color: "#F15B2A"}
    return (
        <>
            {/* <h2 >My Weather App - React-Redux</h2>
            <h2>Overview - Weather Widget</h2> */}
            <nav>
                <NavLink to="/" exact>Home</NavLink>
            </nav>
        </>

    );
};

export default Header;