import React from "react"
import RecentDonations from "./RecentDonations";

const DonationForm = ({donations}) => {
  return (
    <div>
      <h3>You could be donation <span class="secondary">#{donations.length +1}!</span></h3>
      <form>
        <label>
          Name
          <input id="name" name="name" type="text" placeholder="Your name..." />
        </label>
        <label>
          Caption
          <input
            id="caption"
            name="caption"
            type="text"
            placeholder="Add a brief message..."
          />
        </label>
        <label for="amount">
          Amount
          <input id="amount" name="amount" type="number" placeholder="0" />
        </label>
        <button>Donate!</button>
      </form>
    </div>
  );
};

export default DonationForm;
