const Progress = (props) => {
  const { targetAmount, donations } = props;
  let donatedAmount = 0;
  donations.map((donation) => {
    donatedAmount += donation.amount;
  });
  return (
    <section className='progress'>
      <h2>
        Raised <span className='donated-amount'>${donatedAmount}</span> of
        <span className='target-amount'> ${targetAmount}</span>
      </h2>
    </section>
  );
};

export default Progress;
