import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollToTop from './components/router/scroll-to-top';
import './assets/styles/styles.css';
import Home from './pages/home';
import OurStory from './pages/our_story';

class App extends Component {

  render() {
    return (
      <Router>
        <ScrollToTop>
          <Route exact path='/' component={Home} />
          <Route path='/our_story' component={OurStory} />
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
