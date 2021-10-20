import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import "./Header.css";
import useAuth from '../Context/useAuth';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { NavHashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.development';

const Header = () => {

    const signOutIcon = <FontAwesomeIcon icon={faSignOutAlt} />

    const { user, handleLogOut } = useAuth();

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
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item navLinks">
                                <NavHashLink style={{ color: 'white' }} className="me-3 text-decoration-none" to="/home" activeClassName="selected"
                                    activeStyle={{ color: '#00FFFF' }} >Home</NavHashLink>
                            </li>

                            <li className="nav-item navLinks">
                                <NavHashLink style={{ color: 'white' }} className="me-3 text-decoration-none" to="/home#services" activeClassName="selected"
                                    activeStyle={{ color: '#00FFFF' }} >Services</NavHashLink>
                            </li>

                            <li className="nav-item navLinks">
                                <NavHashLink style={{ color: 'white' }} className="me-3 text-decoration-none" to="/account" activeClassName="selected"
                                    activeStyle={{ color: '#00FFFF' }} >Account</NavHashLink>
                            </li>

                            <li className="nav-item navLinks">
                                <NavHashLink style={{ color: 'white' }} className="me-3 text-decoration-none" to="/about" activeClassName="selected"
                                    activeStyle={{ color: '#00FFFF' }} >About</NavHashLink>
                            </li>

                            <li className="nav-item navLinks">
                                <NavHashLink style={{ color: 'white' }} className="me-3 text-decoration-none" to="/register" activeClassName="selected"
                                    activeStyle={{ color: '#00FFFF' }}>Register</NavHashLink>
                            </li>

                            {
                                user.email ?
                                    <button className="btn btn-success" onClick={handleLogOut}>{signOutIcon} <span className="fw-bold text-info">Log Out</span> {user.email}</button>
                                    :
                                    <li className="nav-item">
                                        <NavHashLink style={{ color: 'white' }} className="me-3 text-decoration-none navLinks" to="/login" activeClassName="selected"
                                            activeStyle={{ color: '#00FFFF' }} >Login</NavHashLink>
                                    </li>
                            }
                        </ul>


                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;