import React from 'react';
import { NavLink } from 'react-router-dom';
import image1 from '../../images/register.jpg';
import useAuth from '../Context/useAuth';
import './Register.css';

const Register = () => {
    const { handleEmail, handlePassword, handleAddUser, error } = useAuth();
    return (
        <div>
            <div className="container mx-auto row row-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-1">
                <div className="col my-auto">
                    <h1 className="textColor mt-5">Create Your Account!!!</h1>

                    <form onSubmit={handleAddUser} className='mt-3'>
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

                        <div className="row mb-3">
                            {error}
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