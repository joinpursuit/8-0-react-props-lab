import { Component } from "react";

class RecentDonations extends Component{
  render(){
    const {donations} = this.props

    let displayDonations = donations.map((donation)=>{
      return(
        
        <li key={donation.id}><span>{donation.name} donated {donation.amount}</span>{donation.caption}</li>
        )
      })
      
    
      
      return (
        <section>
        <h2>Recent Donations</h2>
          <ul>
            {displayDonations}
          </ul>
      </section>
    )

  }
};

export default RecentDonations;
