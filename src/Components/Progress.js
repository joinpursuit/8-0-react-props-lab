import React from 'react';

const Progress = (props) => {
  const { targetAmount, donations } = props;
  let amountDonated = 0;
  donations.map((donation) => {
    amountDonated = amountDonated + donation.amount;
  });
  return (
    <section class='progress'>
      <h2>
        Raised <span class='secondary'>${amountDonated} of </span>
        <span class='secondary'>${targetAmount}</span>
      </h2>
    </section>
  );
};

export default Progress;
