import { Component } from "react";

// const RecentDonations = () => {
//   return null;
// };

class RecentDonations extends Component {
  constructor() {
    super();
  }

  render() {
    let { secDonations } = this.props;
    let recentDonationsList = secDonations.map((donation) => {
      return (
        <li>
          <span>
            {donation.name} donated ${donation.amount}
          </span>
          {donation.caption}
        </li>
      );
    });

    return (
      <section>
        <h2>Recent Donations</h2>
        <ul>{recentDonationsList}</ul>
      </section>
    );
  }
}

export default RecentDonations;
