const Progress = (props) => {
  console.log(props.raised)
  return (
    <section class="progress">
      <h2>
        Raised <span class="secondary">{"$"+props.raised}</span> of
        <span class="secondary"> ${props.max}</span>
      </h2>
    </section>
  );
};

export default Progress;
