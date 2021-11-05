import React from "react";

class RecentDonations extends React.Component {
  constructor() {
    super();
  }
  render() {
    const { donations} = this.props;
    return ( 
      <section>
        <h2>Recent Donations</h2>
        <ul>
          <li>
            <span>Rami donated $10</span>Here, take a break from work!
          </li>
        </ul>
      </section>
    );
  }
}

export default RecentDonations;
