import { Component } from "react";

class Progress extends Component {
  render () {
    return (
    <section className="progress">
    <h2>
      Raised <span className="secondary">${this.props.donations.reduce((accumulator, currDonation) => accumulator + currDonation.amount , 0)}</span> of <span className="secondary">${this.props.targetAmount}</span>
    </h2>
    </section>
    );
  }
};

export default Progress;