import React, { Component } from 'react';
import { login, logout, isLoggedIn, getIdToken, getProfile, getLock } from './AuthService';

class Nav extends Component {

  render() {
    const PROFILE_TOKEN_KEY = 'profile_token';
    var lock = getLock();
    var idToken = getIdToken();
    lock.getProfile(idToken, (error, profile) => {
      if (error) {
        console.log('Error loading the Profile', error)
      } else {
        console.log('got profile from server')
        console.log(profile)
        localStorage.setItem(PROFILE_TOKEN_KEY, JSON.stringify(profile))
      }
    });
    // if (getProfile().hasOwnProperty('name')) {
    //   console.log(getProfile().name)
    // } else {
    //   console.log('no name')
    // }

    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
         <div className="navbar-header">
           <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
             <span className="sr-only">Toggle navigation</span>
             <span className="icon-bar"></span>
             <span className="icon-bar"></span>
             <span className="icon-bar"></span>
           </button>
           <a className="navbar-brand" href="/home">OxSub</a>
         </div>
         <div id="navbar" className="collapse navbar-collapse">
           <ul className="nav navbar-nav">
             <li><a href="#">Need a Sub?</a></li>
             <li><a href="#">Looking to Sub?</a></li>
             {
               (isLoggedIn()) ?
               ( <li><a href="/" onClick={() => logout()}>Logout</a></li> ) :
               ( <li><a href="#" onClick={() => login()}>Login</a></li> )
             }
           </ul>
         </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
