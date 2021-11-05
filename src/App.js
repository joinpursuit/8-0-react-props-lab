import React from "react";
import TopBar from "./Components/TopBar";
import RecentDonations from './Components/RecentDonations'
import Progress from './Components/Progress'
import DonationForm from "./Components/DonationForm";
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

export default class App extends React.Component {
  allDonations = donations.map((donation, i)=> <RecentDonations name={donation.name} key={ donation.id } caption={donation.caption} amount={donation.amount}/>)
  render() {
    // console.log("~~ALL DONATIONS",allDonations)
    return (
      <>
        <TopBar />
        <main className="container">
          <section className="sidebar"> {this.allDonations} </section>
          <section className="">
            <Progress donations={donations} targetAmount={targetAmount}/>
            <DonationForm donations={donations}/>
          </section>
        </main>
      </>
    );
  }
}
