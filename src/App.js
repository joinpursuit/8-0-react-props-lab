import React from "react";
import TopBar from "./Components/TopBar";
import "./App.css";

import DonationForm from "./Components/DonationForm"
import Progress from "./Components/Progress"
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

// function App() {
  
  // const map1 = donations.map(e => {
  //   return(
  //     <div>
  //       <li>{e.name} donated ${e.amount}. {e.caption}</li>
  //     </div>
  //     )
  //   });

  const totalDonated = donations.reduce((acc, ele) => (acc += ele.amount), 0);

  export default class App extends React.Component {
    render() {

  return (
    <>
      <TopBar donations={ donations } targetAmount={ targetAmount } />
      <main className="container">
        <section className="sidebar">{/* Recent Donations */}</section>
        <section className="">
          {/* Progress */}
          {/* Donation Form */}
        </section>
      </main>

      <DonationForm donationNumber={`${donations.length+1}`}/>
      <Progress total={totalDonated} targetAmount={targetAmount}/>
      <RecentDonations donations={donations}/>
      </>
      );
    }
  }

