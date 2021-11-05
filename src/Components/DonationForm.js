import { Component } from "react";

class DonationForm extends Component {
  constructor(){
    super();
  }

  render(){
    const {donations} = this.props;
    let allDonations = donations.length; 

    return (
      <section className="donation">
        <h3>You could be donation <span className="secondary">#{ allDonations +1 }!</span></h3>
        <form>
          <label>
            Name<input
              id="name"
              name="name"
              type="text"
              placeholder="Your name..." />
          </label>
          <label>
            Caption<input
              id="caption"
              name="caption"
              type="text"
              placeholder="Add a brief message..." />
          </label>
          <label for="amount">
            Amount<input
              id="amount"
              name="amount"
              type="number"
              placeholder="0" />
          </label>
          <button>Donate!</button>
        </form>
      </section>
    )
  }
}

export default DonationForm;
