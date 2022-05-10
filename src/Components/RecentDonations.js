import React from "react";


export default function RecentDonations (donation) {
  const {amount, caption, id, name} = donation
  return (
    <section> 
    <ul className="sidebar">
      <li className="sidebar"><span>{name} donated {amount}</span>{caption}</li>     
    </ul>
  </section>
  )
};


