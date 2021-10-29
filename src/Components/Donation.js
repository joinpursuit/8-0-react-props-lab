import React, { Component } from 'react';

class Donation extends Component {
  render() {
    return (
      <li>
        <span>
          {this.props.name} donated ${this.props.amount}
        </span>
        {this.props.caption}
      </li>
    );
  }
}

export default Donation;
