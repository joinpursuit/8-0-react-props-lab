import { Component } from "react/cjs/react.production.min";

class RecentDonations extends Component {
render() {
  const { name, amount, caption } = this.props.each;
  return (
  <section>
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