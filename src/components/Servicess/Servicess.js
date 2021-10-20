import React, { useEffect, useState } from 'react';
import Servicee from '../Servicee/Servicee';
import './Servicess.css';

const Servicess = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/prantobiswas321/fake-data/main/fakedata.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mb-5">
                {
                    services.map(service => <Servicee
                        service={service}
                        key={service.id}
                    ></Servicee>)
                }
            </div>
        </div>
    );
};

export default Servicess;