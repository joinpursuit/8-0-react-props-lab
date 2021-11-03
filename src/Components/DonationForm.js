import React, { Component } from 'react';

class DonationForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', caption: '', amount: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState((st) => {
      return { [evt.target.name]: evt.target.value };
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const { name, caption, amount } = this.state;
    this.props.addDonation({ name, caption, amount });
    this.setState({ name: '', caption: '', amount: 0 });
  }

  render() {
    return (
      <section className="donation">
        <h3>
          You could be donation{' '}
          <span className="secondary">{`#${this.props.donoId}!`}</span>
        </h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name..."
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Caption
            <input
              id="caption"
              name="caption"
              type="text"
              placeholder="Add a brief message..."
              value={this.state.caption}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Amount
            <input
              id="amount"
              name="amount"
              type="number"
              placeholder="0"
              value={this.state.amount}
              onChange={this.handleChange}
            />
          </label>
          <input
            type="submit"
            value="Donate!"
            className="donation-form-button "
          />
        </form>
      </section>
    );
  }
}

export default DonationForm;
