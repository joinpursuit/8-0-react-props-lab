import React from "react";

const Donation = (props) => {
  const { amount, caption, name } = props;
  return (
    <li>
      <h5>
        {name} donated ${amount}
      </h5>
      <p>{caption}</p>
    </li>
  );
};

export default Donation;
