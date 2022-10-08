import React from "react";
import TopBar from "./Components/TopBar";
import RecentDonations from "./Components/RecentDonations";
import DonationForm from "./Components/DonationForm"
import Progress from "./Components/Progress";
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

//  {const rDonate = donations.map(donated =>{
//   return(
//         <RecentDonations
//         name = {donated.name}
//       amount = {donated.amount}
//       caption = {donated.caption}
//      id = {donated.id} 

//      />
//      ) 
//   })
// }

export default class App extends React.Component {
  render() {
    // const {name, caption, id, amount} = this.props

    return (
      <>
        <TopBar />
        <main className="container">
          <section className="sidebar">
            <h3>Recent Donations</h3>
          <RecentDonations donations={donations}/>
          
          
          
          </section>
          <section className="">
            {/* Progress */}

            <Progress donations={donations} targetAmount={targetAmount}/>
            {/* DonationForm */}
            <DonationForm donations={donations} />
          </section>
        </main>
      </>
    );
  }
}