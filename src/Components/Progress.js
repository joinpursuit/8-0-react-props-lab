const Progress = ({target, amount}) => {
  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${amount}</span> of
        <span className="secondary"> ${target}</span>
      </h2>
    </section>
  );
};

export default Progress;
