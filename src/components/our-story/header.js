import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {

    componentDidMount() {
        //handle navigation bar styling
        const stickyNav = document.querySelector('#title-bar');

        //change the header's background color, and the text color
        window.addEventListener('scroll', () => {
            //if the screen size is at least 600px
            if (window.innerWidth >= 600) {
                if (window.pageYOffset > 0) {
                    stickyNav.classList.add('scrolled');
                }
                else {
                    stickyNav.classList.remove('scrolled');
                }
            }
        });
    }

    render() {
        return (<div>
            <div className='header-overlay'></div>
            <div id='title-bar'>
                <div className='title-container'>
                    <Link to='/'><span>Sultan's Kitchen</span></Link>
                </div>
            </div>

            <div className='header-content'>
                <div>
                    <h1>Our Story</h1>
                    <span>How we got here</span>
                </div>
            </div>
        </div>);
    }
}