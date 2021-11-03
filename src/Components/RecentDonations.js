import { Component } from "react";

const { amount, caption, id, name} = this.props.donation
const RecentDonations = () => {

  return (


    <div>
      <section>
  <h2>Recent Donations</h2>
  <ul>
    <li><span>{name} donated {amount}</span>You really need this. Really.</li>
    <li><span>Rami donated $10</span>Here, take a break from work!</li>
  </ul>
</section>

    </div>
  )
};

export default RecentDonations;
