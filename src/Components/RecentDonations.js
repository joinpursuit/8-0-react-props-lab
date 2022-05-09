import React from "react";

// It should receive the list of donations as a `donations` prop.
const RecentDonations = (props) => {
  const { name, caption, amount } = props;
  return (
    <div className="DonationList">
      <h4>
        {name} donated ${amount}
      </h4>
      <p>{caption}</p>
    </div>
  );
};

export default RecentDonations;
