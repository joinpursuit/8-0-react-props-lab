import { Component } from "react";

class Progress extends Component {
  constructor() {
    super();
  }
  render() {
    const { donations } = this.props;
    const total = donations
      .map((donated) => donated.amount)
      .reduce((a, b) => a + b, 0);
    return (
      <section className="progress">
        <h2>
          Raised <span className="secondary">$ {total}</span> of{" "}
          <span className="secondary">$1000</span>{" "}
        </h2>
      </section>
    );
  }
}

export default Progress;
