const Progress = ({targetAmount, donations}) => {
  const getTotal = (donations) => {
    let sum = 0;
    for (let don of donations) {
      sum += don.amount
    }
    return sum.toFixed(2)
  };
const total = getTotal(donations)

  return (
    <section className="progress">
  <h2>
    Raised <span className="secondary">${total}</span> of
    <span className="secondary"> ${targetAmount}</span>
  </h2>
</section>
  )
};

export default Progress;
