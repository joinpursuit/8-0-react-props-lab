const Progress = ({targetAmount, donations}) => {

  const sum = (donations) => {
    let sum1 = 0
    for (let donation of donations){
      sum1 += parseInt(donation.amount)
    } return sum1
  };

  const total = sum(donations)

  return (
  <h2>
    Raised <span className="secondary">${total}</span> of
    <span className="secondary">${targetAmount}</span>
  </h2>
  );
};

export default Progress;
