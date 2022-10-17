// export default function RecentDonations() {
//   return null;
// }

import React from "react";

const RecentDonations= ({donations}) =>{
  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>
        {donations.map((donation)=> (  <li key={donation.id}> 
            <span>{donation.name} donated ${donation.amount}</span>{donation.caption}
          </li>))}
         
      </ul>
    </section>
  );
}

export default RecentDonations;
