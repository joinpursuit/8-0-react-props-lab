const Progress = (props) => {
  const {donations, targetAmount} = props;
  let addUpDona = 0;
  donations.forEach(donation => addUpDona += donation.amount);
  return (
    <section>
      <h2>
        Raised ${addUpDona} of ${targetAmount}
      </h2>
    </section>
  );
};

export default Progress;
