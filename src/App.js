import React, { useState, useEffect } from "react";
import TopBar from "./Components/TopBar";
import "./App.css";
import RecentDonations from "./Components/RecentDonations";
import Progress from "./Components/Progress";
import DonationForm from "./Components/DonationForm";
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
const App = () => {
  const [allDonations, setAllDonations] = useState(donations);
  const [amountRaised, setAmountRaised] = useState(0);

  useEffect(() => {
    const getTotal = () => {
      const total = allDonations
        .map(({ amount }) => amount)
        .reduce(function (a, b) {
          return a + b;
        }, 0);
      setAmountRaised(total);
    };
    getTotal();
  }, [allDonations]);

  return (
    <>
      <TopBar />
      <main className='container'>
        <section className='sidebar'>
          <RecentDonations donations={allDonations} />
        </section>
        <section className=''>
          <Progress targetAmount={targetAmount} raised={amountRaised} />
          <DonationForm
            donations={allDonations}
            setAllDonations={setAllDonations}
          />
        </section>
      </main>
    </>
  );
};
export default App;
