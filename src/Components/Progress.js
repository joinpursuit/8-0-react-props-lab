const Progress = (props) => {
  const { donations, targetAmount } = props;
  let raisedAmt = 0;
  donations.forEach((donation) => {
    raisedAmt += donation.amount;
  });

  return (
    <div>
      <h3>
        Raised ${raisedAmt} of ${targetAmount}
      </h3>
    </div>
  );
};

export default Progress;
