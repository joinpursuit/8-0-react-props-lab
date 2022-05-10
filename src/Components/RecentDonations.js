import React from "react";

class RecentDonations extends React.Component {
  
  render() {
    const { donations } = this.props;
    return (
      <>
        <h2>Recent Donations</h2>
        <ul>
          {donations.map(({ name, amount, caption, id }) => (
            <li key={id}><span><b>{name}</b> donated: ${amount}</span> {caption} </li>
          ))}
        </ul>
      </>
    )
  }
}

export default RecentDonations;