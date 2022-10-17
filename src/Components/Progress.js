// export default function Progress() {
//   return null;
// }

import React from 'react'

function Progress({donations , targetAmount}) {
  let totalDonations = 0;
  donations.forEach((donation) => {
   totalDonations+= donation.amount
  })
  return (
<section className="progress">
  <h2>
    Raised <span className="secondary">${totalDonations}</span> of
    <span className="secondary"> ${targetAmount}</span>
  </h2>
</section>  )
}


export default Progress