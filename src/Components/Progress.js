const Progress = ({ targetAmount, totalRaised }) => {
  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${totalRaised}</span> of
        <span className="secondary"> ${targetAmount}</span>
      </h2>
    </section>
  );
};

export default Progress;
