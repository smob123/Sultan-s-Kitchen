import React, { Component } from 'react';
import Header from '../components/our-story/header';
import Timeline from '../components/our-story/timeline';
import Footer from '../components/home-page/footer';

export default class OurStory extends Component {

    render() {
        return (
            <div>
                <div id='header' className='our-story'>
                    <Header />
                </div>

                <div>
                    <Timeline />
                </div>

                <footer>
                    <Footer />
                </footer>
            </div>
        );
    }
}