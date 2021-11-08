const Progress = (props) => {
  const {donations, targetAmount} = props;
  let addUpDona = 0;
  donations.forEach(donation => addUpDona += donation.amount);
  return (
    <section>
      <h2>
        Raised <span className="totalNum">${addUpDona}</span> of <span className="totalNum">${targetAmount}</span>
      </h2>
    </section>
  );
};

export default Progress;
