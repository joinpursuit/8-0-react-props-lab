import React from "react";

export default function RecentDonations(props) {
  console.log(props);
  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>
        <li>
          <span>
            {props.name} donated ${props.amount}
          </span>
          {props.caption}
        </li>
      </ul>
    </section>
  );
}
