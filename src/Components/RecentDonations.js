import { Component } from "react";

class RecentDonations extends Component {
  constructor() {
    super();
  }
  render() {
    const { name, caption, amount } = this.props;
    return (
      <section>
        <h2>Recent Donations</h2>
        <ul>
          <li>
            <span>
              {name} donated ${amount}
            </span>
            {caption}
          </li>
        </ul>
      </section>
    );
  }
}

export default RecentDonations;
