import { Component } from "react";

class RecentDonations extends Component{
  constructor(){
    super();
  }

  render(){
    return (
      <section>
        <h2>Recent Donations</h2>
        <ul>
          <li><span>Jo donated $25</span>You really need this. Really.</li>
          <li><span>Rami donated $10</span>Here, take a break from work!</li>
          {/* <!-- etc... --> */}
        </ul>
      </section>
    );
  }
}

export default RecentDonations;
