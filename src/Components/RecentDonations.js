// const RecentDonations = (props) => {
//   return (
//     <section>
//       <h2>Recent Donations</h2>
//       <ul>
//         <li>
//           <span></span>
//         </li>
//         <li>
//           <span></span>
//         </li>
//       </ul>
//     </section>
//   );
// };

// export default RecentDonations;

import React from "react";
export default function RecentDonations(props) {
  const { name, amount, caption } = props;
  return (
    <li><span>{name} donated {amount}</span>{caption}.</li>
  );
}
