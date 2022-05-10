const Progress = (props) => {
  const { current } = props;
  return (
    <section class="progress">
      <h2>
        Raised <span class="secondary">${current}</span> of
        <span class="secondary"> $1000</span>
      </h2>
    </section>
  );
};

export default Progress;
