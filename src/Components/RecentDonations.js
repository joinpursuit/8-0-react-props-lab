import React, { Component } from 'react';
import Donation from './Donation';

class RecentDonations extends Component {
  render() {
    const recentDonations = this.props.donations.map(
      ({ name, amount, caption, id }) => {
        return (
          <Donation key={id} name={name} amount={amount} caption={caption} />
        );
      }
    );
    return (
      <section>
        <h2>Recent Donations</h2>
        <ul>{recentDonations}</ul>
      </section>
    );
  }
}

export default RecentDonations;
