import "./Progress.css";

const Progress = ({ donations, targetAmount }) => {
  const donationsSum = donations
    .map(({ amount }) => amount)
    .reduce((acc, el) => acc + el, 0);

  const progressPerc = (100 * donationsSum) / targetAmount;

  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${donationsSum}</span> of{" "}
        <span className="secondary">$1000</span>
      </h2>
      <p>{progressPerc}%...almost there!</p>
      <div className="progressBarContainer">
        <div className="progressBar"></div>
      </div>
    </section>
  );
};

export default Progress;
