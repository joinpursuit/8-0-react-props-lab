const Progress = (props) => {
  const { current, total } = props;
  return (
    <section class="progress">
      <h2>
        Raised <span class="secondary">${current}</span> of
        <span class="secondary"> ${total}</span>
      </h2>
    </section>
  );
};

export default Progress;