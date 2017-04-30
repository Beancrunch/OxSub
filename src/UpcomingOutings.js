import React, { Component } from 'react';

class UpcomingOutings extends Component {
  render() {
    return (
      <div className="below-nav-div">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h3>Upcoming Outings</h3>
            </div>
            <div className="col-md-4">
              <button type="button" className="btn btn-lg btn-primary">CREATE A NEW REQUEST</button>
            </div>
          </div>
        </div>
    </div>
    );
  }
}

export default UpcomingOutings
