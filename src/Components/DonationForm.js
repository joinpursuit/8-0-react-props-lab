import { Component } from "react";

class DonationForm extends Component {
  constructor() {
    super();
  }
  render() {
    const { donations } = this.props;
    return (
      <section className="donation">
        <h3>
          You could be donation{" "}
          <span className="secondary">#{ donations.length + 1 }!</span>
        </h3>
        <form>
          <label>
            Name
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name... "
            />
          </label>
          <label>
            Caption
            <input
              id="caption"
              name="caption"
              type="text"
              placeholder="Add a breif message..."
            />
          </label>
          <label for="amount">
            Amount
            <input id="amount" name="amount" type="text" placeholder="0" />
          </label>
          <button>Donate!</button>
        </form>
      </section>
    );
  }
}

export default DonationForm;
