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
      <h4>You could be donation #{donations.length + 1}!</h4>
    </div>
  );
};

export default Progress;
