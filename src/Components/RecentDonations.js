import { Component } from "react";
import donationData from "../data/donationData";

class RecentDonations extends Component{
  constructor(){
    super();
  }

  render(){
    let { title } = this.props;
    let recently = donations.map((donation)=>{
      return <donationData name={donation.name} amount={donation.amount} caption={donation.caption} />
    })

    return (
      <section>
        <h2>Recent Donations</h2>
        <ul>
          <li><span>{ this.name } donated ${ this.amount }</span>{ this.caption }</li>
          <li><span>{ this.name } donated ${ this.amount }</span>{ this.caption }</li>
        </ul>
      </section>
    );
  }
}

export default RecentDonations;
