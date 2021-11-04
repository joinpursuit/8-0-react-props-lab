import { Component } from "react";
import Donation from "./Donation";

class RecentDonations extends Component {
  render() {
    return (
      <section>
      <h2>Recent Donations</h2>
      <ul>
        {this.props.donations.map(({name, amount, caption}) => <Donation name={name} amount={amount} caption={caption} />)}
      </ul>
      </section>
    );
  }
};

export default RecentDonations;