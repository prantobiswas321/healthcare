import React from 'react';
import './Home.css';
import image from "../../images/banner.png";
import Servicess from '../Servicess/Servicess';

const Home = () => {
    return (
        <div className="back-color">
            <div className='d-flex flex-column flex-lg-row justify-content-between align-items-center my-5'>
                <div className='px-5'>
                    <h5 className='fw-bold'><span className="header-text">Welcome to CareSenior</span></h5>
                    <h1 className='fw-bold texttt'>We make a <span className="texttt">Difference</span> in your lives</h1>
                    <p className="header-text">It is difficult to pinpoint the exact age when an adult <br /> becomes a geriatric patient. It is a gradual process that enforces <br /> the need for some kind of support by family or medical staff without which, the patient may be worse off.</p>
                </div>
                <div>
                    <img className='img-fluid' src={image} alt="" />
                </div>
            </div>

            <div id="services" className="mt-5 pt-5">
                <h2 className="text-center fw-bold mb-5" id="#services"><span className="service-text-color">Our Services</span></h2>
                <Servicess></Servicess>
            </div>
        </div>
    );
};

export default Home;