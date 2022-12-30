import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/router/scroll-to-top';
import './assets/styles/styles.css';
import Home from './pages/home';
import OurStory from './pages/our_story';

class App extends Component {

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/our_story' element={<OurStory />} />
          </Routes>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
