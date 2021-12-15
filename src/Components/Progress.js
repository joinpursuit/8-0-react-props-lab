const Progress = (props) => {
  const {target, sum} = props
  return (
    <section class="progress">
      <h2>
        Raised<span class="secondary"> ${sum} </span>
        of<span class="secondary"> ${target}</span>
      </h2>
    </section>
  )
};

export default Progress;
