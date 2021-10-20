import React from 'react';
import './Login.css';
import image2 from '../../images/login.jpg';
import { NavLink } from 'react-router-dom';
import useAuth from '../Context/useAuth';

const Login = () => {
    const { handleGoogleSignIn, handleEmail, handlePassword, handleRegister } = useAuth();

    return (
        <div>
            <div className="container ms-5 row row-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-1">
                <div className="col my-auto">
                    <h1 className="text-danger mt-5">Login Your Account!!!</h1>

                    <form onSubmit={handleRegister} className='mt-3'>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email :</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" id="inputEmail3" onBlur={handleEmail} required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password :</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="inputPassword3" onBlur={handlePassword} required />
                            </div>
                        </div>

                        <input type="submit" value="Login" className="bg-danger px-3 py-2 rounded-3 text-white" />
                    </form>

                    <h1 className="my-3 text-primary fw-bold">Or,</h1>

                    <button className="btn btn-success" onClick={handleGoogleSignIn}>Sign In With Google</button>

                    <NavLink className="text-decoration-none fw-bold" to="/register">
                        <p className="pt-3">Create new account!!</p>
                    </NavLink>

                </div>
                <div className="col">
                    <img src={image2} className="img-fluid ms-5" alt='' />
                </div>
            </div>
        </div>
    );
};

export default Login;