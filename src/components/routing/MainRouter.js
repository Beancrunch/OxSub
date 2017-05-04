import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from '../../pages/Home';
import Nav from '../Nav';
import Signin from '../../pages/Signin';
import Callback from '../auth0/Callback';

const MainRouter = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route exact path="/home" component={Home}/>
      <Route path="/login" component={Signin}/>
      <Route path="/callback" component={Callback}/>
    </div>
  </Router>
);

export default MainRouter;