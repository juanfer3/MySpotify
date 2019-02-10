import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import ArtistDetail from './Components/Artists/ArtistDetail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/artist/:name' component={ArtistDetail}/>

            
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
