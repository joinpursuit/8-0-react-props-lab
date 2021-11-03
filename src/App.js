import React from "react";
import TopBar from "./Components/TopBar";
import "./App.css";
import Progress from "./Components/Progress";
import RecentDonations from "./Components/RecentDonations";
import DonationForm from "./Components/DonationForm";

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
let raisedAmount = 0;
donations.map((donation) => {
  raisedAmount += donation.amount
  return raisedAmount
})

export default class App extends React.Component {
  render() {
    return (
      <>
        <TopBar />
        <main className="container">
          <section className="sidebar">
            {/* RecentDonations */}
            <RecentDonations donations={donations} />
            </section>
          
          <section className="">
            {/* I want props to have a key on it called max, and a value of whatever this is. */}
            {/* Progress */}
            <Progress max={targetAmount} min={raisedAmount} />
            
            {/* Donation Form */}
            <DonationForm position={donations.length + 1}/>
          </section>
        </main>
      </>
    );
  }
}
