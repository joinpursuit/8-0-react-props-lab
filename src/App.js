import React from 'react';
import TopBar from './Components/TopBar';
import './App.css';
import Progress from './Components/Progress';
import RecentDonations from './Components/RecentDonations';
import DonationForm from './Components/DonationForm';

const targetAmount = 1000;
const donations = [
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
];

export default class App extends React.Component {
  render() {
    let collected = 0;
    for (let donated of donations) {
      collected += donated.amount;
    }
    let donate = donations.map((donate) => {
      return (
        <RecentDonations
          name={donate.name}
          amount={donate.amount}
          caption={donate.caption}
          key={donate.id}
        />
      );
    });

    return (
      <>
        <TopBar />
        <main className="container">
          <section className="sidebar">
            <h2>Recent Donations</h2>
            {donate}
          </section>
          <section className="">
            <Progress amount={collected} targetAmount={targetAmount} />
            <DonationForm PeopleDonateQueue={donations.length + 1} />
          </section>
        </main>
      </>
    );
  }
}
