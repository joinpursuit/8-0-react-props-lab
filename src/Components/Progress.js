

const Progress = ({targetAmount, totalDonated}) => {
  return (
    <section className="progress">
  <h2>
    Raised  <span className="secondary">${totalDonated}</span> of
    <span className="secondary"> ${targetAmount}</span>
  </h2>
</section>
  );
};

export default Progress;
