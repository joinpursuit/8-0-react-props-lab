const Progress = (props) => {
  const { targetAmount, donations } = props;
  let donationAmount = 0;
  donations.map((donation) => {
    donationAmount += donation.amount;
  });
  return (
    <section class="progress">
      <h2>
        Raised <span class="secondary">${donationAmount}</span> of
        <span class="secondary"> ${targetAmount}</span>
      </h2>
    </section>
  );
};

export default Progress;
