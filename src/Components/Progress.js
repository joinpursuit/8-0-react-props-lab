import React from "react";

class Progress extends React.Component {
  constructor(){
    super()
  }
  render(){
    const { donations } = this.props;
    let total = 0;
    donations.forEach((donation) => {
      return total += donation.amount;
    });

    return(
      <section class="progress">
        <h2>
          Raised <span class="secondary">${total}</span> of <span class="secondary">${this.props.targetAmount}</span>
        </h2>
      </section>
    )
  }
}

export default Progress
