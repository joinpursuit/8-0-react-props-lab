import React from "react";
import TopBar from "./Components/TopBar";
import "./App.css";
import DonationForm from "./Components/DonationForm";
import RecentDonations from "./Components/RecentDonations";
import Progress from "./Components/Progress";
// import DonationForm from "./Components/DonationForm";

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

const totalDonated = donations.reduce((accumulator, oneDonation) =>{
 return (accumulator += oneDonation.amount)
},0)
console.log("totalDonated", totalDonated)



// let donationRaised = 0
const donationList = donations.map(donation => {

  // {
  //   donationRaised =  donationRaised + donation.amount
  // }
  return(
    <RecentDonations name = {donation.name} amount = {donation.amount} caption = {donation.caption} id = {donation.id} />
  )
})


function App() {
  
    return (
      <>
        <TopBar />
        <main className="container">
          <section className="sidebar">
          
            <h2>Recent Donations</h2>
       
             {donationList}
      
          </section>

          <section className="">
            <Progress targetAmount={targetAmount}  totalDonated = {totalDonated} />
            <DonationForm  totalDonors = {donations.length +1}/>
          </section>
        </main>
      </>
    );
  }

export default App
