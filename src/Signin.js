import React, { Component } from 'react';
import Nav from './Nav';
import './css/signin.css';

class Signin extends React.Component {
  render() {
    return (
      <div className="signin-main-div">
        <Nav />
        <div className="container">
          <form className="form-signin">
            <h2 className="form-signin-heading">Please sign in</h2>
            <label for="inputEmail" className="sr-only">Email address</label>
            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
            <label for="inputPassword" className="sr-only">Password</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
            <div className="checkbox">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Log in</button>
          </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Signin
