import React, { Component } from 'react';

import Home from './pages/Home'
import ClubPage from './pages/ClubPage'
import Services from './pages/Services'

import { Switch, Route } from "react-router-dom";

class Main extends Component {
  render() {
    return (     
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/nuestro-club" component={ ClubPage } />   
          <Route path="/servicios" component={ Services } />                  
        </Switch>     
    );
  }
}

export default Main;
