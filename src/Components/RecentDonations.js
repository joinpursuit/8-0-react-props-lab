import React from "react";
/*const RecentDonations = () => {
  return null;
};*/

const RecentDonations = ({donations}) =>{
  
    return (
      <div>
      <h2>Recent Donations</h2>
      <ul>
        { donations.map((donation)=> {
          return (
          <li key={donation.id}>
            <span>
              {donation.name} donated ${donation.amount}
            </span>
            {donation.caption}
          </li>
          )
        })}
      </ul>
    </div>
    );
  }

export default RecentDonations;
