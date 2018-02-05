import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import EaronsTable from './components/table';
import Navigation from './components/Navigation';
import ShowMap from './Map';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <ShowMap />
      </div>
    );
  }
}

export default App;
