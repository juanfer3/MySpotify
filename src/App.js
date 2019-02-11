import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import ArtistDetail from './Components/Artists/ArtistDetail';
import AlbumDetail from './Components/Albums/AlbumDetail';
import Login from './Components/Home/Login';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       auth: false
    };
}
  render() {
    return (
      <div className="App">
        {this.state.auth ? (
          <BrowserRouter>
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/artist/:name' component={ArtistDetail}/>
                <Route path='/:artist/:album' component={AlbumDetail} />
              </Switch>
          </BrowserRouter>
          ):(
            <Login></Login>
          )}
      </div>
    );
  }
}

export default App;
