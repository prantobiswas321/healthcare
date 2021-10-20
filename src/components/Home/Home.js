import React from 'react';
import './Home.css';
import image from "../../images/banner.png";
import Servicess from '../Servicess/Servicess';

const Home = () => {
    return (
        <div>
            <div className='d-flex flex-column flex-lg-row justify-content-between align-items-center my-5'>
                <div className='px-5'>
                    <h5 className='fw-bold'>Welcome to CareSenior</h5>
                    <h1 className='fw-bold'>We make a Difference in your lives</h1>
                    <p>It is difficult to pinpoint the exact age when an adult <br /> becomes a geriatric patient. It is a gradual process that enforces the need for some kind of <br /> support by family or medical staff without which, the patient may be worse off.</p>
                </div>
                <div>
                    <img className='img-fluid' src={image} alt="" />
                </div>
            </div>

            <div>
                <h2 className="text-center fw-bold mb-5" id="#services">Our Services</h2>
                <Servicess></Servicess>
            </div>
        </div>
    );
};

export default Home;