const Progress = ({ donations, targetAmount }) => {
  let raisedMoney = 0;
  return (
    <h2>
      Raised <span className="secondary">
        {
          donations.map((donation) => {
           raisedMoney += donation.amount;
          })
        }
        ${raisedMoney}
        </span> of
      <span className="secondary"> ${targetAmount}</span>
    </h2>
  )
};
export default Progress;