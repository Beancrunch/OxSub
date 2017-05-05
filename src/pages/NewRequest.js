import React from 'react';
import Nav from '../components/Nav';

class NewRequest extends React.Component {

  render() {
    return (
      <div>
        <Nav />
        <div className="below-nav-div">
          <h2>create new reqiest</h2>
        </div>
      </div>
    )
  }
}

export default NewRequest
