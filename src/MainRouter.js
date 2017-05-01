import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home';
import Nav from './Nav';
import Signin from './Signin';

const MainRouter = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route exact path="/home" component={Home}/>
      <Route path="/login" component={Signin}/>
    </div>
  </Router>
);

export default MainRouter;
