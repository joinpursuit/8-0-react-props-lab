import React from 'react';
import TopBar from './Components/TopBar';
import Progress from './Components/Progress';
import DonationForm from './Components/DonationForm';
import RecentDonations from './Components/RecentDonations';
import './App.css';

export default class App extends React.Component {
  static defaultProps = { targetAmount: 1000 };
  constructor(props) {
    super(props);
    this.state = {
      donations: [
        {
          amount: 250,
          caption: 'You really need this. Really.',
          id: 1,
          name: 'Jo',
        },
        {
          amount: 30,
          caption: 'Here, take a break from work!',
          id: 2,
          name: 'Rami',
        },
        {
          amount: 20,
          caption: 'LOL! You are too funny. Happy to do this for you. :)',
          id: 3,
          name: 'Michelle',
        },
        {
          amount: 5,
          caption: 'Have fun!',
          id: 4,
          name: 'Malinda',
        },
        {
          amount: 30,
          caption: 'Come visit me in Miami!',
          id: 5,
          name: 'Sam',
        },
      ],
      nextId: 6,
    };
    this.addDonation = this.addDonation.bind(this);
  }

  addDonation(donation) {
    const { nextId } = this.state;
    const newDonation = {
      ...donation,
      nextId,
      amount: Number(donation.amount),
    };
    this.setState((st) => {
      return {
        donations: [...st.donations.slice(), newDonation],
        nextId: st.nextId + 1,
      };
    });
  }

  render() {
    const total = this.state.donations.reduce(
      (total, { amount }) => total + amount,
      0
    );
    return (
      <>
        <TopBar />
        <main className="container">
          <section className="sidebar">
            <RecentDonations
              donations={this.state.donations}
              key={this.state.nextId}
            />
          </section>
          <section className="">
            <Progress total={total} targetAmount={this.props.targetAmount} />
            <DonationForm
              donoId={this.state.nextId}
              addDonation={this.addDonation}
            />
          </section>
        </main>
      </>
    );
  }
}
