const Progress = (props) => {
  const sum = props.total.map((element) => element.amount).reduce((a, b) => a + b);

  return (
    <section class="progress">
      <h2>
        Raised <span class="secondary"> ${sum}</span> of
        <span class="secondary"> ${props.target}</span>
      </h2>
    </section>
  );
};

export default Progress;
