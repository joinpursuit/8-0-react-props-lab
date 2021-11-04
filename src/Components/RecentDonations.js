import { Component } from "react";
import donations from "../data/donations";

class RecentDonations extends Component{
  constructor(){
    super();
  }

  render(){
    let allDonations = donations.map((donation)=>{
      return (
      <li><span>{donation.name} donated ${donation.amount}</span>{donation.caption}</li>
      )
    })

    return (
      <section>
        <h2>Recent Donations</h2>
        <ul>
          { allDonations }
        </ul>
      </section>
    );
  }
}

export default RecentDonations;
