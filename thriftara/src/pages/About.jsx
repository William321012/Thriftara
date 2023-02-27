import React from 'react';
import './About.css';
import clothes from '../images/clothes.png';

const About = () => {
    return (
        <div>
            <div className='title'>
                <h1>About Us</h1>
                <h2>"Saving the world, while saving your wallet"</h2>
            </div>
            <img src={clothes} class="img-fluid" alt="Responsive image"/>
        </div>
    );
}

export default About;

