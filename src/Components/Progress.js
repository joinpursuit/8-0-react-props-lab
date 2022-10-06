const Progress = ({donations, targetAmount}) => {
  const sum = (donations) => {
    let sum = 0;
    for (let donate of donations) {
     sum += parseInt(donate.amount);
    }
    return sum
  };
  const total = sum(donations);
  return (
    <h2>
    Raised <span className="secondary">${total}</span> of
    <span className="secondary"> ${targetAmount}</span>
  </h2>
  )
};

export default Progress;
