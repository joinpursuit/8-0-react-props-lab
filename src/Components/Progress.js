import React from "react";

class Progress extends React.Component {
  constructor() {
    super();
  }
  render() {
    const { donations, targetAmount } = this.props;
    return (
      <section class="progress">
        <h2>
          Raised <span class="secondary">$0</span> of
          <span class="secondary">${targetAmount}</span>
        </h2>
      </section>
    );
  }
}

export default Progress;
