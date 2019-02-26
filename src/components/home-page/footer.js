import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (<div>
        <div className='top-container'>
            <div className='about-container'>
                <h3>About us</h3>
                <span>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                    live
                    the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.
                </span>
            </div>
            <div className='links-container'>
                <div>
                    <h3>The restaurant</h3>
                    <span>About us</span>
                    <span>Events</span>
                    <span>Contact</span>
                </div>
                <div>
                    <h3>Userful Links</h3>
                    <span>Food</span>
                    <span>Beverages</span>
                    <span>Desserts</span>
                </div>
                <div>
                    <h3>Userful Links</h3>
                    <span>Food</span>
                    <span>Beverages</span>
                    <span>Desserts</span>
                </div>
            </div>
        </div>
        <div className='social-media-container'>
            <FontAwesomeIcon icon={faFacebook} size='2x' />
            <FontAwesomeIcon icon={faInstagram} size='2x' />
            <FontAwesomeIcon icon={faTwitter} size='2x' />
        </div>
        <div className='copyright-container'>
            <p>Sultan's Kitchen &copy;</p>
        </div>
    </div>);
}
