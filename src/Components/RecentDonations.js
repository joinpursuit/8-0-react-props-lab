import { Component } from "react";

//elements equal to the number of donations
//li should include (-the person who donated, the amount, and their caption)

class RecentDonations extends Component{
  constructor(props) {
    super(props);
  }

  render(){
    const { donations } = this.props;

    allRecentDonations = donations.map((donation, i)=> {
      return(
        <section>
          <h2>Recent Donations</h2>
          <ul>
            <li> <span> {donation.name} donated ${donation.amount}</span> {donation.caption}</li>
          </ul>
        </section>
      )
    })

    return ({allRecentDonations});
  }
}

export default RecentDonations;