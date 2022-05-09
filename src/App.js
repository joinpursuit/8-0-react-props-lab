import React from "react";
import TopBar from "./Components/TopBar";
import "./App.css";
import Progress from "./Components/Progress";
import RecentDonations from "./Components/RecentDonations";
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

const sumOfDonations = () => {
  let sum = 0;
  for (let i = 0; i < donations.length; i++) {
    sum += donations[i].amount;
  }
  return sum;
};

export default class App extends React.Component {
  render() {
    const recentDonationsList = donations.map((donated) => {
      return (
        <RecentDonations
          name={donated.name}
          amount={donated.amount}
          caption={donated.caption}
        />
      );
    });
    return (
      <>
        <TopBar />
        <main className="container">
          <section className="sidebar">
            <h2>Recent Donations</h2>
            {recentDonationsList}
          </section>
          <section className="">
            <Progress currentAmount={sumOfDonations()} goal={targetAmount} />
            <form>
              <DonationForm
                currentId={donations[donations.length - 1].id + 1}
              />
              <label>
                <p>Name</p>
                <input type="text" placeholder="Your name..." />
              </label>
              <section>
                <label>
                  <p>Caption</p>
                  <input type="text" placeholder="Add a brief message..." />
                </label>
              </section>
              <section>
                <label>
                  <p>Amount</p>
                  <input type="text" placeholder="0" />
                </label>
              </section>
              <br></br>
              <input type="submit" value="Donate" />
            </form>
          </section>
        </main>
      </>
    );
  }
}
