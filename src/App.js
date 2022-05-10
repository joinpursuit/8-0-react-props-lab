import React from "react";
import TopBar from "./Components/TopBar";
import Progress from "./Components/Progress";
import DonationForm from "./Components/DonationForm";
import RecentDonations from "./Components/RecentDonations";
import "./App.css";

const targetAmount = 1000;
const donations = [
  {
    amount: 250,
    caption: "You really need this. Really.",
    id: 1,
    name: "Jo",
  },
  {
    amount: 30,
    caption: "Here, take a break from work!",
    id: 2,
    name: "Rami",
  },
  {
    amount: 20,
    caption: "LOL! You are too funny. Happy to do this for you. :)",
    id: 3,
    name: "Michelle",
  },
  {
    amount: 5,
    caption: "Have fun!",
    id: 4,
    name: "Malinda",
  },
  {
    amount: 30,
    caption: "Come visit me in Miami!",
    id: 5,
    name: "Sam",
  },
];

const donationsTotal = donations.reduce((acc, donation) => {
  return acc + donation.amount;
}, 0);

const nextDonation = donations.length + 1;

const listedDonations = donations.map((donation) => {
  return (
    <RecentDonations
      name={donation.name}
      amount={donation.amount}
      caption={donation.caption}
    />
  );
});

export default class App extends React.Component {
  render() {
    return (
      <>
        <TopBar />
        <main className="container">
          <section className="sidebar">
            <ul>{listedDonations}</ul>
          </section>
          <section className="">
            <Progress raisedAmount={donationsTotal} />
            <DonationForm nextDonationNum={nextDonation} />
          </section>
        </main>
      </>
    );
  }
}
