import React from "react";
import TopBar from "./Components/TopBar.js";
import Progress from "./Components/Progress.js";
import DonationForm from "./Components/DonationForm.js";
import RecentDonations from "./Components/RecentDonations.js";
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

let numberCount = 0;
let totalReceived = 0;
donations.forEach((donor) => {
  totalReceived += donor.amount;
  numberCount += 1;
});

export default class App extends React.Component {
  render() {
    return (
      <>
        <TopBar />
        <main className="container">
          <section className="sidebar">
            {donations.map((donor) => {
              return (
                <RecentDonations
                  name={donor.name}
                  amount={donor.amount}
                  caption={donor.caption}
                />
              );
            })}
          </section>
          <section className="">
            <Progress target={targetAmount} totalRaised={totalReceived} />
            <DonationForm number={numberCount} />
          </section>
        </main>
      </>
    );
  }
}
