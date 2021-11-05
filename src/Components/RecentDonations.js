import React from "react";

class RecentDonations extends React.Component {
  constructor(){
    super()
  }
  render(){
    const { donations } = this.props;
    const formattedDono = donations.map((each) => {
      return <li><span>{each.name} donated ${each.amount}</span>{each.caption}</li>
    })

    return(
      <section>
        <h2>Recent Donations</h2>
        <ul>{formattedDono}</ul>
      </section>
    )
  } 
}

export default RecentDonations;
