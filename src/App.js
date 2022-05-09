import React from "react";
import TopBar from "./Components/TopBar";
import "./App.css";
// import ALL child.js files to the parent App.js file - DonationForm - RecentDonations - Progress
import DonationForm from "./Components/DonationForm";
import RecentDonations from "./Components/RecentDonations";
import Progress from "./Components/Progress";

// create prop with const in parent file - targetAmount is a string 
const targetAmount = 1000;

// create prop with const in parent file - donations is an array of objects
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
        <main className="container">
          <section className="sidebar">
            {/* add the child.js file to the parent.js file return with variables equal to the props INTERPOLATED */}
            <RecentDonations donations={donations}></RecentDonations>
          </section>
          <section className="">
            {/* add the child.js file to the parent.js file return with variables equal to the props INTERPOLATED */}
            <Progress
              targetAmount={targetAmount}
              donations={donations}
            ></Progress>
            {/* add the child.js file to the parent.js file return with variables equal to the props INTERPOLATED */}
            {/* TO GET THE NUMBER OF DONATIONS -  DONATIONS is an array - donations.length is the number of donations + 1 would be the next donation  */}
            <DonationForm donationNumber={donations.length + 1} />
          </section>
        </main>
      </>
    );
  }
}
