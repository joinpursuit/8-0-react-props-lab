import { Component } from "react";

class Progress extends Component {
  constructor() {
    super();
  }
  render() {
    const { secDonations, targetAmount } = this.props;

    let donateAmount = 0;

    secDonations.forEach((donation) => {
      donateAmount += donation.amount;
    });

    return (
      <section class="progress">
        <h2>
          Raised <span class="secondary">${donateAmount}</span> of
          <span class="secondary"> ${targetAmount}</span>
        </h2>
      </section>
    );
  }
}

export default Progress;
