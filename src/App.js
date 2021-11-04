import React from "react";
import TopBar from "./Components/TopBar";
import Progress from "./Components/Progress";
import DonationForm from "./Components/DonationForm";
import RecentDonations from "./Components/RecentDonations";
import "./App.css";

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
