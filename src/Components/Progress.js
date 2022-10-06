const Progress = ({ donations, targetAmount }) => {
  const donos = donations.reduce((accumulator, {amount}) => {
    return accumulator + amount
  }, 0);

  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${donos}</span> of <span className="secondary"> ${targetAmount}</span>
      </h2>
    </section>
  )
};

export default Progress;
