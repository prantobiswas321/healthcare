import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../Context/useAuth';
import './Account.css';

const Account = () => {
    const { user } = useAuth();
    return (
        <div className="back-color p-5">
            {
                user.email ?
                    <div class="card-group">
                        <div class="card">
                            <img src={user.photoURL} class=" mx-auto w-15 mt-5" alt="..." />
                            <div class="card-body mt-5">
                                <h5 class="card-title">Email: {user.email}</h5>
                                <h1 className="fw-bold">Uid: {user.uid}</h1>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="p-5">
                        <h1 className="p5 fw-bold texttt">Please Login first <br /> to see your account information. <br /> otherwise you are are not able to see anything.</h1>
                        <NavLink to="/login"><button className="btn btn-danger fw-bold m-5">Go to Login page</button></NavLink>
                    </div>
            }
        </div>
    );
};

export default Account;