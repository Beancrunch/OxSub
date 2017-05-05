import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import HttpsRedirect from 'react-https-redirect';
import Home from '../../pages/Home';
import Signin from '../../pages/Signin';
import Callback from '../auth0/Callback';

const MainRouter = () => (
  <HttpsRedirect>
    <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route path="/login" component={Signin}/>
        <Route path="/callback" component={Callback}/>
      </div>
    </Router>
  </HttpsRedirect>
);

export default MainRouter;
