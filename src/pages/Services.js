import React, { Component } from 'react';
import { Switch, Route, NavLink } from "react-router-dom";

import Houses from './TabPages/Houses'
import Lots from './TabPages/Lots'

class Services extends Component {
    render() {
        return (
            <div className="services_page">
                <section className="sec_home_hero" style={{ 'backgroundImage': 'url(' + process.env.PUBLIC_URL + '/img/cover1.jpg' + ')' }}>
                    <div className="overlay">

                    </div>
                </section>
                <section className="services_navigation">

                        <div className="nav_tabs">
                            <NavLink exact className="n_tab" to="/servicios/casas">Tipos de casas</NavLink>
                            <NavLink  className="n_tab" to="/servicios/lotes">Lotes</NavLink>
                        </div>
                     
                                <Switch>
                                    <Route exact path="/servicios/casas" component={Houses} />                                   
                                    <Route  path="/servicios/lotes" component={Lots} />
                                </Switch>
                     
                    
                </section>
            </div>
        );
    }
}

export default Services;
