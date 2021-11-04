const Progress = (props) => {
  let contribution = props.currentValue.map((element) => {
    return element.amount;
  });

  contribution = contribution.reduce((a, b) => {
    return a + b;
  });
  return (
    <section class="progress">
      <h2>
        Raised <span class="secondary"> ${contribution}</span> of
        <span class="secondary"> ${props.max}</span>
      </h2>
    </section>
  );
};

export default Progress;
