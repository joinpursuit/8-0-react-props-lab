/*
const RecentDonations = () => {
  return null;
};
*/

import { Component } from "react";

class RecentDonations extends Component {
  constructor() {
    super(); 
  }

  render() {
    const donationList = this.props.donations.map((donated) => {
      return <li><span>{donated.name} donated ${donated.amount}</span>{donated.caption}</li>;
    })

    return(
      <section>
        <h2>Recent Donations</h2>
        <ul>{donationList}</ul>
      </section>
    )
  }
}

export default RecentDonations;
