import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Reservation from './reservation';

//phone nav hamburger menu bars
let phoneNave;
let nav; //nav elements container
let expanded = false;

export default class Header extends Component {
    componentDidMount() {
        phoneNave = document.querySelector('#phone-nav');
        nav = document.querySelector('#main-nav');

        //handle navigation bar styling
        const stickyNav = document.querySelector('#title-bar');
        const headerVideo = document.querySelector('video');

        //change the header's background color, and the text color
        window.addEventListener('scroll', () => {
            //if the window's y offset is larger than the header's height
            if (window.pageYOffset >= window.innerHeight) {
                headerVideo.pause(); //pause the background video
            }
            else {
                headerVideo.play(); //otherwise play the video
            }

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

    //handles page navigation
    scrollToSection(secName) {
        const elem = document.getElementById(secName);
        console.log(elem);
        window.scroll({
            top: elem.offsetTop - 50,
            behavior: 'smooth'
        });

        if (window.innerWidth < 600) {
            this.expand();
        }
    }

    //displays side nav when phone div is clicked
    expand() {
        if (!expanded) {
            phoneNave.classList.add('expanded');
            nav.classList.add('visible');
        } else {
            phoneNave.classList.remove('expanded');
            nav.classList.remove('visible');
        }

        expanded = !expanded;
    }

    //shows the reservation container
    showReservation() {
        const container = document.querySelector('.reservation-container');
        const body = document.querySelector('body');

        container.style['opacity'] = 1;
        container.style['pointer-events'] = 'initial';

        //hide the scroller for the body element
        body.style['overflow-y'] = 'hidden';

        //display the dates for the next three days on the dates selection
        const dates = document.querySelector('.reservation-date select');
        const dateElems = dates.childElementCount; //the number of elements in the drop down menu

        //if there are no dates in the drop down menu
        if (dateElems === 0) {
            //add three dates starting from today
            const d = new Date();
            for (let i = 0; i < 3; i++) {
                d.setDate(d.getDate() + 1);
                dates.innerHTML += `<option>${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}</option>`;
            }
        }
    }

    render() {
        return (
            <div>
                <video autoPlay muted loop>
                    <source src={require('../../assets/videos/background.mp4')} type='video/mp4' />
                </video>

                <div className='header-overlay'></div>
                <div id='title-bar'>
                    <div className='title-bar-content'>
                        <div className='title-container'>
                            <Link to='/'><span>Sultan's Kitchen</span></Link>
                        </div>
                        <div className='nav-container'>
                            <div id='phone-nav' onClick={() => this.expand()}>
                                <div id='bar1' className='collapsed'></div>
                                <div id='bar2' className='collapsed'></div>
                                <div id='bar3' className='collapsed'></div>
                            </div>

                            <nav id='main-nav'>
                                <div>
                                    <p className='white-txt' onClick={() => this.scrollToSection('header')}>Home</p>
                                </div>
                                <div>
                                    <p className='white-txt' onClick={() => this.scrollToSection('about-section')}>About</p>
                                </div>
                                <div>
                                    <p className='white-txt' onClick={() => this.scrollToSection('offers-section')}>Offers</p>
                                </div>
                                <div>
                                    <p className='white-txt' onClick={() => this.scrollToSection('menu-section')}>Menu</p>
                                </div>
                                <div>
                                    <p className='white-txt' onClick={() => this.scrollToSection('contact-container')}>Contact</p>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="header-content" id='header-section'>
                    <div>
                        <h1>Welcome to Sultan's Kitchen</h1>
                        <span>There is first love and there is kithen love</span>
                        <button className='reservation-btn' onClick={() => this.showReservation()}>Reserve a Table</button>
                    </div>
                </div>

                <div>
                    <Reservation />
                </div>
            </div>
        );
    }
}