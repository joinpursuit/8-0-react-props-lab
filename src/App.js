import React from "react";
import TopBar from "./components/TopBar";
import Progress from "./components/Progress";
import DonationForm from "./components/DonationForm";
import RecentDonations from "./components/RecentDonations";
import donations from "./data/donations";
import "./App.css";

const targetAmount = 1000;

export default class App extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <>
        <TopBar />
        <main className="container">
          <section className="sidebar">{<RecentDonations />}</section>
          <section className="progress-and-donation-form">
            <Progress />
            <DonationForm donations={ donations }/>
          </section>
        </main>
      </>
    )
  }
}
