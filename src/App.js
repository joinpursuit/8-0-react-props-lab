import React from "react";
import TopBar from "./components/TopBar";
import Progress from "./components/Progress";
import DonationForm from "./components/DonationForm";
import RecentDonations from "./components/RecentDonations";
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
          <section className="">
            <Progress />
            <DonationForm />
          </section>
        </main>
      </>
    )
  }
}
