import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import "./Header.css";

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "#5CDB95"
    }
    // react awesome icon
    const iconHeart = <FontAwesomeIcon icon={faHeartbeat} />
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-color">
            <div className="container">
                <h2 className="fw-bold header-text-color">{iconHeart} CareSenior</h2>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="ms-auto fs-5 fw-bold navbar-nav">
                        <NavLink style={{ color: 'white' }} activeStyle={activeStyle} className="nav-link" to="/home">Home</NavLink>
                        <NavLink style={{ color: 'white' }} activeStyle={activeStyle} className="nav-link" to="/account">Account</NavLink>
                        <NavLink style={{ color: 'white' }} activeStyle={activeStyle} className="nav-link" to="/about">About</NavLink>
                        <NavLink style={{ color: 'white' }} activeStyle={activeStyle} className="nav-link" to="/register">Register</NavLink>
                        <NavLink style={{ color: 'white' }} activeStyle={activeStyle} className="nav-link" to="/login">Login</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;