// const DonationForm = () => {
//   return null;
// };

import react from "react";

class DonationForm extends react.Component {
  render() {
    const { donations } = this.props;

    return (
      <>
        <h3>You could be donation <span className="secondary">#{(donations.length)+1}!</span></h3>
        <form>
          <fieldset>
            <label>Name</label> <input id="name" name="name" type="text" placeholder="Your name..." />
          </fieldset>
          <fieldset>
            <label>Caption</label> <input id="caption" name="caption" type="text" placeholder="Add a brief message..." />
          </fieldset>
          <fieldset>
            <label for="amount"> Amount</label> <input id="amount" name="amount" type="number" placeholder="0" />
          </fieldset>
          <button>Donate!</button>
        </form>
      </>
    )
  }
}

export default DonationForm;