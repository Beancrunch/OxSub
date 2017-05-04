import React, { Component } from 'react';
import { login, logout, isLoggedIn, getIdToken, getLock } from './auth0/AuthService';

const PROFILE_TOKEN_KEY = 'profile_token'

class Nav extends Component {

  constructor(props) {
    super(props)
    this.state = {profile: {}}
  }

  componentDidMount() {
    let profile = localStorage.getItem(PROFILE_TOKEN_KEY)
    if (profile) {
      console.log(profile)
      this.setState({profile: JSON.parse(profile)})
    } else if (isLoggedIn()){
      console.log('profile not found in local storage but user is logged in')
      this.getRemoteProfileAndSetToLocalStorageAndSetState()
    } else {
      console.log('profile not found in local storage and use is NOT logged in')
    }
  }

  getRemoteProfileAndSetToLocalStorageAndSetState() {
    let lock = getLock()
    let idToken = getIdToken()
    lock.getProfile(idToken, (error, profile) => {
      if (error) {
        console.log('Error loading the Profile', error)
      } else {
        let profileString = JSON.stringify(profile)
        console.log('got profile from server :: ' + profileString)
        localStorage.setItem(PROFILE_TOKEN_KEY, profileString)
        this.setState({profile: profile})
      }
    })
  }

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
             {
               console.log('Username :' + this.state.profile.name)
             }
           </ul>
         </div>
        </div>
      </nav>
    );
  }
}

export default Nav
