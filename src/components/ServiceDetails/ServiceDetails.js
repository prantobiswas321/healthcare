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

    // console.log(services);

    const result = services.find(single => single.id === parseInt(idNumber));
    // console.log(result);
    return (
        <div>

        </div>
    );
};

export default ServiceDetails;