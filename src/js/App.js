import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Baseplate from './Templates/Baseplate';
import Home from './Templates/Home';
import '../scss/styles.scss';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <ul className="navbar-nav mr-auto">
                            <li><Link to={ '/' } className="nav-link"> Home </Link></li>
                            <li><Link to={ '/baseplate' } className="nav-link"> Baseplate </Link></li>
                        </ul>
                    </nav>
                    <hr />
                    <Switch>
                        <Route exact path='/' component={ Home } />
                        <Route path='/baseplate' component={ Baseplate } />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;