const Progress = ({ targetAmount, donations }) => {
  const totalAmount = donations.reduce((acc, { amount }) => {
    return acc + amount;
  }, 0);

  // const ProgressSoFar = totalAmount(donations);

  return (
    <section>
      <h2>
        Raised <span> ${totalAmount}</span> of <span>${targetAmount}</span>
      </h2>
    </section>
  );
};

export default Progress;
