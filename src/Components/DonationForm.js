import React from 'react'

const DonationForm = (props) => {

  return (
    <section class="donation">
      <h3>
        You could be donation <span class="secondary">#{props.donations.length + 1}!</span>
      </h3>
      <form>
        Name
        <input id="name" name="name" type="text" placeholder="Your name..."></input> 
        Caption
        <input
          id="caption"
          name="caption"
          type="text"
          placeholder="Add a brief message..."
        ></input>
        Amount
        <input id="amount" name="amount" type="number" placeholder="0"></input>
        <button>Donate</button>
      </form>
    </section>
  );
}




export default DonationForm;
