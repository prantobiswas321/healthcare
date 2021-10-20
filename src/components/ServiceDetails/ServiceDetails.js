import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const { idNumber } = useParams();
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/prantobiswas321/fake-data/main/fakedata.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    const detail = services.find(single => single.id === parseInt(idNumber));
    return (
        <div className='bg-secondary'>
            <div className="py-5 text-white">
                <img src={detail?.image} className="mx-auto w-50 rounded-3" alt="result_image" />
                <h1 className="mt-3">Name: {detail?.name}</h1>
                <h4 className="mx-5 px-5">Description: {detail?.description}</h4>
                <h4>Cost: ${detail?.cost}</h4>
            </div>
        </div>
    );
};

export default ServiceDetails;