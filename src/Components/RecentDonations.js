import { Component } from "react";

class RecentDonations extends Component  {
constructor(props){
  super(props)
}

   render (){
     let donationsToDisplay = this.props.donations.map((donation ,i)=> <li key={i}> {donation.name}donated ${donation.amount} {donation.caption} </li>)
  return (
    <section>
    <h2>Recent Donations</h2>
    <ul>
      {/* {this.props.donations.map((donation ,i)=> <li key={i}> {donation.name} </li>)} */}
      {donationsToDisplay}
      
    </ul>
  </section>
  );
}
};

export default RecentDonations;
