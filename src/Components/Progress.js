const Progress = (props) => {
  const { targetAmount, donations } = props;

  let totalDonated = 0;
  const totalDonatedBuilder = donations.map((donation) => {
    totalDonated += donation.amount;
  });

  return (
    <section class="progress">
      <h2>
        Raised <span class="secondary">${totalDonated}</span> of
        <span class="secondary"> ${targetAmount}</span>
      </h2>
    </section>
  );
};

export default Progress;
