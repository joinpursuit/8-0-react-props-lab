import { Component } from "react";

class Progress extends Component {
  render() {
    
    return (
      <section class="progress">
        <h2>
          Raised <span class="secondary">${this.props.totalDonations}</span>
          of {" "}
          <span class="secondary">${this.props.targetAmount}</span>
        </h2>
      </section>
    );
  }
}

export default Progress;
