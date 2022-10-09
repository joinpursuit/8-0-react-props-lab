import React from "react";
import TopBar from "./Components/TopBar";
import RecentDonations from "./Components/RecentDonations";
import DonationForm from "./Components/DonationForm"
import Progress from "./Components/Progress"
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

const listItems = donations.map((donation) => {
  return (
    <RecentDonations key={donation.id} donationName={donation.name} donationAmount={donation.amount} donationCaption={donation.caption}/>
  )
})

let lastDonationId = donations[donations.length-1].id
let nextDonatorNumber = lastDonationId + 1
let totalDonationsArr = []
let totalDonations = 0

// getting our total donations
for (let index = 0; index < donations.length; index++) {
  totalDonationsArr.push(donations[index].amount)
}
console.log(totalDonationsArr)


for (var i in totalDonationsArr) {
  totalDonations += totalDonationsArr[i];
}
console.log(totalDonations)


function App() {
  return (
    <>
      <TopBar />
      <main className="container">
        <section className="sidebar">
          <h2>Recent Donations</h2>
          <ul>
          {listItems}
          </ul>
          </section>
        <section>
          
          <section className='progress'>
          <Progress donorNum={totalDonations} target={targetAmount}/>
          </section>
          <section className='donation'>
          <DonationForm donorNum={nextDonatorNumber}/>
          <form>
          <label htmlFor="name"
          >Name<input
          id="name"
          name="name"
          type="text"
          placeholder="Your name..." /></label
          ><label htmlFor="caption"
          >Caption<input
          id="caption"
          name="caption"
          type="text"
          placeholder="Add a brief message..." /></label
         ><label htmlFor="amount"
         >Amount<input
         id="amount"
         name="amount"
         type="number"
         placeholder="0" /></label
         ><button>Donate!</button>
         </form>
          </section>
        </section>
      </main>
    </>
  );
}

export default App;
