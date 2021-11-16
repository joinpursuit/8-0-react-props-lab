import React from "react";

class Progress extends React.Component {
  constructor() {
    super();
  }
  render() {
    const { donations, targetAmount } = this.props;
    let raisedAmount = donations.map((el) => el.amount);
    let total = raisedAmount.reduce((a, b) => {
      return a + b;
    }, 0);

    return (
      <section class="progress">
        <h2>
          Raised <span class="secondary">${total}</span> of{" "}
          <span class="secondary">${targetAmount}</span>
        </h2>
      </section>
    );
  }
}

export default Progress;
