import React, { Component } from 'react';
import Header from '../components/home-page/header';
import About from '../components/home-page/about';
import Offers from '../components/home-page/offers';
import Menus from '../components/home-page/menus';
import Contact from '../components/home-page/contact';
import Footer from '../components/home-page/footer';


export default class Home extends Component {
  render() {
    return (
      <div className='main'>
        <div id='header'>
          <Header />
        </div>
        <section id='about-section'>
          <About />
        </section>

        <section className='menu-div' id='offers-section'>
          <Offers />
        </section>

        <section id='menu-section'>
          <Menus />
        </section>
        <section id="contact-container">
          <Contact />
        </section>
        <footer>
          <Footer />
        </footer>
      </div >
    );
  }
}

