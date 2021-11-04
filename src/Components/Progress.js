const Progress = (props) => {
  let total = 0;
  props.donations.map((donation) => {
    total += donation.amount;
  });
  return (
    <section class="progress">
      <h2>
        Raised <span class="secondary">${total}</span> of
        <span class="secondary"> ${props.max}</span>
      </h2>
    </section>
  );
};

export default Progress;
