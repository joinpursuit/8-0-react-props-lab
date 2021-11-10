import { Component } from "react";

class RecentDonations extends Component {

  render(){
    //const { donations } = this.props.donations;
    const donationsArr = this.props.donations.map((donation, index)=>{
      return <li key={index}><span>{donation.name} donated ${donation.amount}</span>{donation.caption}</li>
    })
  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>
        {donationsArr}
      </ul>
    </section>
  );
  }
};

export default RecentDonations;
