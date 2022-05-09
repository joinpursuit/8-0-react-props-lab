import React from "react";

const DonationForm = () => {
  return (
    <form>
      <div>
        <label>Name</label>
        <input type="text" placeholder="Your name..."></input>
      </div>
      <div>
        <label>Caption</label>
        <input type="text" placeholder="Add a brief message..."></input>
      </div>
      <div>
        <label>Amount</label>
        <input min="5" max="1000" defaultValue="0"></input>
        <p id="dollars">0</p>
        <button type="click">Donate</button>
      </div>
    </form>
  );
};

export default DonationForm;
