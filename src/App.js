import React from "react";
import TopBar from "./Components/TopBar";
import "./App.css";
import DonationForm from "./Components/DonationForm";
import Progress from "./Components/Progress";
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

export default class App extends React.Component {
  render() {
    let sum = 0
    donations.forEach((donation)=>{
      return(
        sum+= donation.amount
      )
    })
    let recentDonations = donations.map((donation)=>{
      return(
        <RecentDonations 
        name={donation.name}
        amount={donation.amount}
        caption={donation.caption}
        />
      )
    })
    return (
      <>
        <TopBar />
        <main className="container">
          <section className="sidebar">{recentDonations}</section>
          <section className="">
             <Progress target={targetAmount} sum={sum}/>
             <DonationForm length={donations.length}/>
          </section>
        </main>
      </>
    );
  }
}
