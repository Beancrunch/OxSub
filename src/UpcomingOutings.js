import React, { Component } from 'react';

class RequestSummary extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-8">
            <div className="left-align">
                Christ Church M2 looking for a Cox <br />
                For an outing at 2pm on Saturday 29 April 2017.
            </div>
          </div>
          <div className="col-md-4">
            <button type="button" className="btn btn-sm btn-default">Respond</button>
          </div>
        </div>
        <hr />
      </div>

    );
  }
}

class UpcomingOutings extends Component {
  render() {
    return (
      <div className="below-nav-div">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">Upcoming Outings</h3>
                </div>
                <div className="panel-body">
                  <RequestSummary />
                  <RequestSummary />
                  <RequestSummary />
                  <RequestSummary />
                  <RequestSummary />
                </div>
              </div>
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
