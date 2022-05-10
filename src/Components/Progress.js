const Progress = (props) => {
  let { amount, targetAmount } = props;
  return (
    <section class="progress">
      <h2>
        Raised <span class="secondary">${amount}</span> of
        <span class="secondary"> ${targetAmount}</span>
      </h2>
    </section>
  );
};

export default Progress;
