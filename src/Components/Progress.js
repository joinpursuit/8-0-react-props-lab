const Progress = (props) => {
  const { targetAmount, total  } = props
return (
  <section class="progress">
  <h2>
    Raised <span class="secondary"> ${ total }</span> of
    <span class="secondary"> ${targetAmount }</span>
  </h2>
</section>
)
};

export default Progress;
