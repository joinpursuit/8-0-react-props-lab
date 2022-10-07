const Progress = ({target, donations}) => {
  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${
          donations.reduce(
            (prev, current) => prev + current.amount,
            0
          )
        }</span> of
        <span className="secondary"> ${target}</span>
      </h2>
    </section>
  );
};

export default Progress;
