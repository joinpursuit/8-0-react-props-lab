import React from "react";

// const RecentDonations = () => {
//   return null;
// };
// const donations = [
//   {
//     amount: 250,
//     caption: "You really need this. Really.",
//     id: 1,
//     name: "Jo",
//   },
//   {
//     amount: 30,
//     caption: "Here, take a break from work!",
//     id: 2,
//     name: "Rami",
//   },
//   {
//     amount: 20,
//     caption: "LOL! You are too funny. Happy to do this for you. :)",
//     id: 3,
//     name: "Michelle",
//   },
//   {
//     amount: 5,
//     caption: "Have fun!",
//     id: 4,
//     name: "Malinda",
//   },
//   {
//     amount: 30,
//     caption: "Come visit me in Miami!",
//     id: 5,
//     name: "Sam",
//   },
// ];

class RecentDonations extends React.Component {
  
  render() {
    const { donations } = this.props;
    return (
      <>
        <h2>Recent Donations</h2>
        <ul>
          {donations.map(({ name, amount, caption, id }) => (
            <li key={id}><span><b>{name}</b> donated: ${amount}</span> {caption} </li>
          ))}
        </ul>
      </>
    )
  }
}

export default RecentDonations;