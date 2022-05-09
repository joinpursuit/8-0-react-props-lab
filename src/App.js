import React from "react";
import TopBar from "./Components/TopBar";
import "./App.css";
import Progress from "./Components/Progress";
import DonationForm from "./Components/DonationForm";
import RecentDonations from "./Components/RecentDonations";

const targetAmount = 1000;
// The Total amount to be raisewd $1000 (targetAmount)

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

export default class App extends React.Component {
  render() {
    return (
      <>
        <TopBar />
        <Progress />
        <DonationForm />
        {/* <RecentDonations /> */}
        <main className="container">
          <section className="sidebar">
            <h2>Recent Donations</h2>
            <ul>
              {donations.map((donation) => {
                return (
                <li>
                  <RecentDonations 
                  name = {donation.name} 
                  amount = {donation.amount}
                  caption = {donation.caption}
                  />
                </li>
                );
              })}
              
            </ul>
              
          </section>
          <section className="">
            {/* Progress */}
            {/* Donation Form */}
          </section>
        </main>
      </>
    );
  }
}
