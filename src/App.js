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

// However, you're not rendering these li's the React 'way'. 
// In App, you're handling the .map() of all the donations and returning new RecentDonation elements. 
// Alternatively, what you should be doing is passing the donations array down to this RecentDonations component and performing the .map() calculation here. 
// That .map() should then be returning li elements to be placed inside the ul. Please let me know if you need clarification or help with this!

export default class App extends React.Component {
  render() {
    return (
      <>
        <TopBar />
        <main className="container">
          <section className="sidebar"> {this.allDonations} </section>
          <section className="">
            <Progress donations={donations} targetAmount={targetAmount}/>
            <RecentDonations donations={donations}/>
            <DonationForm donations={donations}/>
          </section>
        </main>
      </>
    );
  }
}