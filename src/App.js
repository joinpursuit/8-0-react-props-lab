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
          <section className="">
            <h2>Recent Donation</h2>
            {recentDonationsList}
          </section>
          <section>
            <Progress currentAmount={sumOfDonations()} goal={targetAmount} />
            <form>
              <DonationForm
                currentId={donations[donations.length - 1].id + 1}
              />
              <section>
                <label>
                  <p>Name</p>
                  <input type="text" placeholder="Add a breif message..." />
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
