import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat, faMapMarkedAlt, faEnvelope, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
    // icons are here
    const iconHeart = <FontAwesomeIcon icon={faHeartbeat} />
    const iconLocation = <FontAwesomeIcon icon={faMapMarkedAlt} />
    const iconMail = <FontAwesomeIcon icon={faEnvelope} />
    const iconPhone = <FontAwesomeIcon icon={faPhoneSquare} />
    return (
        <div className="header-text-color mt-5 bg-color">
            <div className="container p-5 d-flex flex-column flex-lg-row justify-content-lg-between bd-highlight mt-5">

                <div>
                    <h3 className="fw-bold">{iconHeart} CareSenior</h3>
                    <p>We give seniors the love they deserve</p>
                </div>

                <div className="mb-3">
                    <h4 className="fw-bold">Quick links</h4>
                    <nav className="navbar-nav">
                        <NavLink style={{ textDecoration: 'none', color: '#5CDB95' }} to='/home'>Home</NavLink>
                        <NavLink style={{ textDecoration: 'none', color: '#5CDB95' }} to='/account'>Account</NavLink>
                        <NavLink style={{ textDecoration: 'none', color: '#5CDB95' }} to='/about'>About</NavLink>
                        <NavLink style={{ textDecoration: 'none', color: '#5CDB95' }} to='/Register'>Register</NavLink>
                        <NavLink style={{ textDecoration: 'none', color: '#5CDB95' }} to='/login'>Login</NavLink>
                    </nav>
                </div>

                <div>
                    <h4 className="fw-bold">Contact Us</h4>
                    <div>
                        <p>{iconLocation} 350 Avenue, New York, NY 10001<br />
                            {iconMail} info@example.com<br />
                            {iconPhone} 888-000-999</p>
                    </div>
                </div>
            </div>

            <hr />

            <footer className="text-center p-1">
                <p><small>Pranto Biswas © 2021. All Rights Reserved.</small></p>
            </footer>
        </div >
    );
};

export default Footer;