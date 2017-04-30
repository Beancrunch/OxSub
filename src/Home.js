import React, { Component } from 'react';
import Nav from './Nav';
import UpcomingOutings from './UpcomingOutings';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <UpcomingOutings />
      </div>
    );
  }
}

export default Home
