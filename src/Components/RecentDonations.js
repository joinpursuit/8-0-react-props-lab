import { Component } from "react";
import donations from "../data/donations";

class RecentDonations extends Component{
  constructor(){
    super();
  }

  render(){
    let { title } = this.props;
    let allDonations = donations.map((donation, i)=>{
      return (
      <li><span>{donation.name} donated ${donation.amount}</span>{donation.caption}</li>
      )
    })

    return (
      <section>
        <h2>{ title }</h2>
        <ul>
          { allDonations }
        </ul>
      </section>
    );
  }
}

export default RecentDonations;
