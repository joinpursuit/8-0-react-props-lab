const Progress = (props) => {
  let total = 0;
  props.sum.forEach((item) => {
    return (total += item.amount);
  });

  return (
    <section class="progress">
      <h2>
        Raised <span class="secondary">${total}</span> of
        <span class="secondary">${props.target}</span>
      </h2>
    </section>
  );
};
export default Progress;
