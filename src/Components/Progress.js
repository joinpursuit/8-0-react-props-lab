const Progress = ({ donations, targetAmount }) => {
  const Given = donations.reduce((acc, { amount }) => {
    return acc + amount;
  }, 0);

  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${Given}</span> of
        <span className="secondary"> ${targetAmount}</span>
      </h2>
    </section>
  );
};

export default Progress;
