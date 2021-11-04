import { Component } from "react";

// const RecentDonations = (props) => {
//   const recentDonationsList = props.donationsArr.map(donation => {
//     return (
//       <li><span>{donation.name} donated ${donation.amount}</span>{donation.caption}</li>
//     )
//   });

//   return (
//     <section>
//       <h2>Recent Donations</h2>
//       <ul>
//         {recentDonationsList}
//       </ul>
//     </section>
//   );
// };

class RecentDonations extends Component {
  constructor() {
    super()
  }
  render() {
    const { donationsArr } = this.props

    const recentDonationsList = donationsArr.map(donation => {
      return (
        <li><span>{donation.name} donated ${donation.amount}</span>{donation.caption}</li>
      )
    });

    return(
      <section>
        <h2>Recent Donations</h2>
        <ul>
          {recentDonationsList}
        </ul>
      </section>
    )
  }
}

export default RecentDonations;
