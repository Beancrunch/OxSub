import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home';
import Nav from './Nav';

const Login = () => (
  <div>
    <Nav />
    <br /><br /><br />
    <div>
      <h2>Login</h2>
    </div>
  </div>
);

const MainRouter = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
    </div>
  </Router>
);

export default MainRouter;
