const Progress = (props) => {
  return (
    <section class="progress">
      <h2>
        Raised <span class="secondary">$335</span> of
      </h2>
        <span class="secondary"> ${props.max}</span>
    </section>
  )
};

export default Progress;