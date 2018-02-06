import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import EaronsTable from './components/table';
import Navigation from './components/Navigation';
import YearsNav from './components/Years';
import ShowMap from './components/Map';
import Graphs from './components/Graphs';

class App extends Component {
  render() {
    return (
      <div className="content">
        <Navigation/>
        <div className="container">
          <YearsNav/>
          <ShowMap/>
        </div>
        <Graphs/>
      </div>
    );
  }
}

export default App;
