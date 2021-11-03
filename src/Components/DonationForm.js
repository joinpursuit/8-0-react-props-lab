// const DonationForm = () => {
//   return null;
// };

import { Component } from "react";

class DonationForm extends Component {
  constructor(){
    super()
  }
  render(){
    return (
      <div className="donationForm">
      <h2 id="donator">{ this.props.name }Hello World</h2>
      </div>
    )
  }
}

export default DonationForm
