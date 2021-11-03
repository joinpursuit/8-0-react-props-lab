import React from "react";
import TopBar from "./Components/TopBar";
import "./App.css";
import Progress from "./Components/Progress"
import DonationForm from "./Components/DonationForm";
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
    const result = donations.map((element) => <RecentDonations name ={element.name} amount={element.amount} caption={element.caption} />)
    console.log(result)
    return (
      <>
        <TopBar />
        <main className="container">
          <section className="sidebar">
          <section>
              <h2>Recent Donations</h2>
              <ul>
                {result}
              </ul>
          </section>    
            </section>
          <section className="">
            <Progress target={targetAmount} donations={donations}/>
             <DonationForm donations={donations}/>
          </section>
        </main>
      </>
    );
  }
}
