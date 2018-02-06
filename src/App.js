import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import EaronsTable from './components/table';
import Navigation from './components/Navigation';
import Graphs from './components/Graphs';
import About from './components/About';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="content">
          <Navigation/>
          <div className="container">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
          </div>
          <Graphs/>
        </div>
      </Router>
    );
  }
}

export default App;
