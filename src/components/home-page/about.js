import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div className="content">
            <div className="about-section-content">
                <div className='about-section-txt-container'>
                    <p>OUR STORY</p>
                    <h2 id='about-section-heading'>Welcome</h2>
                    <p>Image Shall stars every gathering kind said image morning upon don&#39;t. Our midst over of be
                        she&#39;d had the let male make place it so.</p>

                    <p>Gathered them signs saw. Behold so midst created living doesn&#39;t so likeness wherein said to
                        lights after cattle called also male sixth was male rule.</p>

                    <Link to='/our_story'>
                        <button>Learn More</button>
                    </Link>
                </div>
                <div className='about-section-img'>
                    <picture>
                        <source srcSet={require('../../assets/images/about/min-900.png')} media='(min-width: 900px)' />
                        <source srcSet={require('../../assets/images/about/min-600.png')} media='(min-width: 600px)' />
                        <img src={require('../../assets/images/about/max-599.png')} alt='chefs' loading='lazy' />
                    </picture>
                </div>
            </div>
        </div>
    );
}