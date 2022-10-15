const Progress = (props) => {
  const { donationAmount } = props;
  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${donationAmount}</span> of
        <span className="secondary"> $1000</span>
      </h2>
    </section>
  );
};

export default Progress;
