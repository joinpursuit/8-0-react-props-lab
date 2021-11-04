const Progress = ({max, amount}) => {
  return (<section class="progress">
  <h2>
    Raised <span class="secondary">${amount}</span> of
    <span class="secondary"> ${max}</span>
  </h2>
</section>
  )
};

export default Progress;
