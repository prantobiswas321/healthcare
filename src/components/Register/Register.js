import React from 'react';
import { NavLink } from 'react-router-dom';
import image1 from '../../images/register.jpg';
import './Register.css';

const Register = () => {
    return (
        <div>
            <div className="container ms-5 row row-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-1">
                <div className="col my-auto">
                    <h1 className="text-danger mt-5">Create Your Account!!!</h1>

                    <form className='mt-3'>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email :</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" id="inputEmail3" required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password :</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="inputPassword3" required />
                            </div>
                        </div>

                        <input type="submit" value="Register" className="bg-danger px-3 py-2 rounded-3 text-white" />

                        <NavLink className="text-decoration-none" to="/login">
                            <p className="pt-5 fw-bold">Already Have An Account?</p>
                        </NavLink>
                    </form>

                    {/* <form >
                        <div className="mb-3">
                            <label htmlhtmlFor="exampleInputEmail1" className="form-label">Email address :</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Your email address' required />

                        </div>
                        <div className="mb-3">
                            <label htmlhtmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password' required />
                        </div>

                        <input type="submit" value="Register" className="bg-danger px-3 py-2 rounded-3 text-white" />

                        <NavLink to="/login">
                            <p className="pt-5">Already Have An Account?</p>
                        </NavLink>

                    </form> */}

                </div>
                <div className="col">
                    <img src={image1} className="img-fluid ms-5" alt='' />
                </div>
            </div>
        </div>
    );
};

export default Register;