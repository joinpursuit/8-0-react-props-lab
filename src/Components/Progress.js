import { Component } from "react";

class Progress extends Component {
  constructor(){
    super();
  }
  render(){
    const { donations } = this.props;
    let allDonations = donations.map((donation) => {
      return donation.amount
    })

    const reducer = (perviousValue, currentValue) => perviousValue + currentValue;

    let totalSoFar = allDonations.reduce(reducer)

    return (
      <section className="progress">
        <h2>
          Raised <span className="secondary">${totalSoFar} </span>
          of<span className="secondary">${this.props.targetAmount}</span>
        </h2>
      </section>
    )
  }
};

export default Progress;
