// export default function DonationForm() {
//   return null;
// }
import React from 'react'

function DonationForm({donations}) {
  const donaterNum = donations.length + 1
  return (

<section className="donation">
  <h3>You could be donation <span className="secondary">#{donaterNum}!</span></h3>
  <form>
    <label htmlFor="name"
      >Name<input
        id="name"
        name="name"
        type="text"
        placeholder="Your name..." /></label
    ><label htmlFor="caption"
      >Caption<input
        id="caption"
        name="caption"
        type="text"
        placeholder="Add a brief message..." /></label
    ><label htmlFor="amount"
      >Amount<input
        id="amount"
        name="amount"
        type="number"
        placeholder="0" /></label
    ><button>Donate!</button>
  </form>
</section>  )
}

export default DonationForm