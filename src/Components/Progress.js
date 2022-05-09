const Progress = ({ targetAmount, donated }) => {
  let total = 0;
  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">
          {donated.map((donate) => {
            total += donate.amount;
          })}
          ${total}
        </span>{" "}
        of
        <span className="secondary"> ${targetAmount}</span>
      </h2>
    </section>
  );
};

export default Progress;
