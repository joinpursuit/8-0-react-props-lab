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

function App() {
  function thetotal(){
    let tatal = 0;
    for (let i=0;i<donations.length;i++){
      tatal += Number(donations[i].amount)
    }
    return tatal
  }

  const map1 = donations.map(x => {
    return(
      <div>
      <li>{x.name}{x.caption}{x.amount}</li>
</div>
    )
  });
  return (
    <>
      <TopBar />
      <main className="container">
        <section className="sidebar">{/* Recent Donations */}</section>
        <section className="">
          {/* Progress */}
          {/* Donation Form */}
        </section>
      </main>

      <DonationForm amount={`${donations.length+1}`}/>
      <Progress total={thetotal()} realtotl={targetAmount}/>
      <RecentDonations alldonations={map1}/>
    </>
  );
}

export default App;
