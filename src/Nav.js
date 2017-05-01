import React, { Component } from 'react';
import { login, logout, isLoggedIn, getIdToken, getProfile } from './AuthService';

class Nav extends Component {

  render() {
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
