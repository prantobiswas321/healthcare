import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="back-color">
            <div>
                <h1 className="text-center fw-bold mt-4">About us</h1>
            </div>
            <div className="container d-flex flex-column bd-highlight mb-3 mt-5">

                <h6 className="fw-bold">Best Caringing Services</h6>
                <h2 className='fw-bold'>Welcome to CareSenior</h2>
                <br />
                <p>Common conditions in older age include hearing loss, cataracts and refractive errors, back and neck pain and osteoarthritis, chronic obstructive pulmonary disease, diabetes, depression and dementia. As people age, they are more likely to experience several conditions at the same time.

                    Older age is also characterized by the emergence of several complex health states commonly called geriatric syndromes. They are often the consequence of multiple underlying factors and include frailty, urinary incontinence, falls, delirium and pressure ulcers.A longer life brings with it opportunities, not only for older people and their families, but also for societies as a whole. Additional years provide the chance to pursue new activities such as further education, a new career or a long-neglected passion. Older people also contribute in many ways to their families and communities. Yet the extent of these opportunities and contributions depends heavily on one factor: health.</p>

                <div className="p-2 bd-highlight my-4">
                    <h2 className="fw-bold">Challenges in responding to population ageing</h2>
                    <p>There is no typical older person. Some 80-year-olds have physical and mental capacities similar to many 30-year-olds. Other people experience significant declines in capacities at much younger ages. A comprehensive public health response must address this wide range of older people’s experiences and needs.

                        The diversity seen in older age is not random. A large part arises from people’s physical and social environments and the impact of these environments on their opportunities and health behaviour. The relationship we have with our environments is skewed by personal characteristics such as the family we were born into, our sex and our ethnicity, leading to inequalities in health.

                        Older people are often assumed to be frail or dependent and a burden to society. Public health professionals, and society as a whole, need to address these and other ageist attitudes, which can lead to discrimination, affect the way policies are developed and the opportunities older people have to experience healthy aging.</p>
                </div>

                <div className="p-2 bd-highlight">
                    <h2 className="fw-bold">Our Programs Emphasize</h2>
                    <p>awareness about health;<br />
                        checking health condition;<br />
                        meaning, purpose, and goal-orientation;<br />
                        making them happy;<br />
                        feel them okay.</p>
                </div>
            </div>
        </div>
    );
};

export default About;