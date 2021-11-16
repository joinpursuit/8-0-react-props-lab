import React from "react";

class RecentDonations extends React.Component {
  constructor() {
    super();
  }
  render() {
    const { donations } = this.props;
    let donationsToRender = donations.map((donation, i) => {
      return (
        <li>
          <span>
            {donation.name} donated ${donation.amount}
          </span>
          {donation.caption}
        </li>
      );
    });

    return (
      <section>
        <h2>Recent Donations</h2>
        <ul>{donationsToRender}</ul>
      </section>
    );
  }
}

export default RecentDonations;
