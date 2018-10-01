import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './header/header.jsx';
import Login from './login';
import Register from './register/register.jsx';
import Table from './table';
import Viewtext from './viewtext';

class Home extends Component {
    render() {
        return (
            <Switch>
            	<Route exact path='/' component={Table}/>
              	<Route path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
              	<Route path='/list' component={Table}/>
              	<Route path='/:id' component={Viewtext}/>
            </Switch>
        )
    }
}

export default Home;