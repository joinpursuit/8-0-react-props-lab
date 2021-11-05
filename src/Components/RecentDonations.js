import { Component } from "react";

//elements equal to the number of donations
//li should include (-the person who donated, the amount, and their caption)

class RecentDonations extends Component{
  constructor() {
    super();
  }
  render(){
    const {name, caption, amount } = this.props;

    return (
      <section>
        <h2>Recent Donations</h2>
        <ul>
          <li><span>{name} donated ${amount}</span> {caption}</li>
        </ul>
      </section>
    );
  }
}

export default RecentDonations;
