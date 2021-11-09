import { Component } from "react";

class RecentDonations extends Component {
  constructor(){
    super()
  }

  render(){
    const {donations} = this.props;
    const allDonations = donations.map((donation)=>{
      return (
        <li><span>{donation.name} donated ${donation.amount}</span>{donation.caption}</li>);
    })

    return(
      <section>
        <h2>Recent Donations</h2>
        <ul>
        {allDonations}
        </ul>
    </section>
    )
  }
} 

export default RecentDonations;
