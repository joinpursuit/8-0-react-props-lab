const Progress = (props) => {
  let current = 0;
  props.donations.forEach((item) => {
    current += item.amount;

  });
  return (
    <section class ="progress">
      <h2>
        Raised <span class="secondary">${current}</span> of
      <span class="secondary"> ${props.target}</span>
      </h2>
    </section>
  );
};

export default Progress;
