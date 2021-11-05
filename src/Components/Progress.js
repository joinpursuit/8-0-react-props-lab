const Progress = (props) => {
  return (
  <section class="progress">
    <h2>
      Raised <span class="secondary"> ${props.currentAmount}</span> of
      <span class="secondary"> ${props.max}</span>
    </h2>
  </section>
  );
};

export default Progress;
