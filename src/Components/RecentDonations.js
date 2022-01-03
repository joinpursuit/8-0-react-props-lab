import { Component } from "react";

class RecentDonations extends Component {
  constructor() {
  super();
  }

render() {
  const { donations } = this.props;
  const totalDonations = donations.map((donation) => {

  return (
  <li><span>{ donation.name } donated $ { donation.amount }</span>{ donation.caption }</li>
  );
})

  return (
  <section>
  <h2>Recent Donations</h2>
  <ul>{ totalDonations }</ul>
  </section>
  )};
}


export default RecentDonations;
