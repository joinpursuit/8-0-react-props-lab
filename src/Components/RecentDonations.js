import React from "react";
import RecentDonation from "./RecentDonation";

const RecentDonations = (props) => {
  
  return (
    <React.Fragment>
      <h2>Recent Donations</h2>
      <ul>
        {props.donations.map(donation=> <RecentDonation donation={donation} key={donation.id}/>)}
        
      </ul>
  </React.Fragment>

  );
};

export default RecentDonations;
