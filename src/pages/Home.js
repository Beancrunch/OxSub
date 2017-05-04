import React, { Component } from 'react';
import Nav from '../components/Nav';
import UpcomingOutings from '../components/UpcomingOutings';

var outingSummaries = [
  {"crew":"Christ Church M1", "subRequired":"cox", "date":"30 April 2017", "time":"2pm"},
  {"crew":"Christ Church M3", "subRequired":"rower - strokeside", "date":"29 April 2017", "time":"2pm"},
  {"crew":"Christ Church M3", "subRequired":"rower - bowside", "date":"29 April 2017", "time":"2pm"},
  {"crew":"Christ Church W1", "subRequired":"cox", "date":"1 May 2017", "time":"7am"},
  {"crew":"Christ Church W2", "subRequired":"cox", "date":"29 April 2017", "time":"5pm"}
];

class Home extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <UpcomingOutings outingSummaries={outingSummaries} />
      </div>
    );
  }
}

export default Home
