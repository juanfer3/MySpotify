import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div >
          <Home/>
        </div>
        <Navbar></Navbar>
      </div>
    );
  }
}

export default App;
