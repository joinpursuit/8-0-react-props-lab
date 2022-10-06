import "./Progress.css";

const Progress = ({ donations }) => {
  const donationsSum = donations
    .map((donation) => {
      return donation.amount;
    })
    .reduce((acc, el) => acc + el, 0);

  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${donationsSum}</span> of{" "}
        <span className="secondary">$1000</span>
      </h2>
      <div className="progressBar"></div>
    </section>
  );
};

export default Progress;
