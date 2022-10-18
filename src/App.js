import React from "react";
import TopBar from "./Components/TopBar";
import "./App.css";
import DonationForm from "./Components/DonationForm";
import Progress from "./Components/Progress.js";
import RecentDonations from "./Components/RecentDonations";

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

let numOfDonation = donations.length + 1;
const donoTotal = donations.reduce((acc, dono) => acc + dono.amount, 0);

function App() {
  return (
    <>
      <TopBar />
      <main className="container">
        <section className="sidebar">
          {" "}
          <RecentDonations donations={donations} />
          {/* Recent Donations */}
        </section>
        <section className="">
          <Progress donoTotal={donoTotal} targetAmount={targetAmount} />{" "}
          {/* Progress */}
          <DonationForm numOfDonation={numOfDonation} /> {/* Donation Form */}
        </section>
      </main>
    </>
  );
}

export default App;