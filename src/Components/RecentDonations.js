

import React from "react"
import RecentDonation from "./RecentDonation"

const RecentDonations = (props) => {
  const { donations } = props;
  const recent = donations.map((don) => {
    return <RecentDonation name={don.name} amount={don.amount} caption={don.caption} key={don.id}/>
  
  })
  return (
    <div>
    <h5>Recent Donations</h5>
    <ul>
      {recent}
    </ul>
       </div>
  )
}

export default RecentDonations;
