import React from "react";

const RecentDonation = (props) => {
    const {amount, caption, name, id} = props
    return(
      <li key={id}>
          <h5>
              {name} donated ${amount}
          </h5>
          <h5>
              {caption}
          </h5>
      </li>
    )
  };

  export default RecentDonation