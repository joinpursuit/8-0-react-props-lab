import React from "react";

const Progress = ({ donationAmount, targetAmount }) => {
  // const { targetAmount, donations } = props;
  // const amountRaised = donations.reduce(
  //   (accu, donationAmount) => (accu += donationAmount),
  //   0
  // );
  // const {targetAmount, donations} = props;
  // let amountDonated = donations.reduce((acc, ele) => (acc += ele.amount));
  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${donationAmount}</span> of
        <span className="secondary"> ${targetAmount}</span>
      </h2>
    </section>
  );
};

export default Progress;
