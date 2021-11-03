const Progress = (props) => {
  return (
  <section class="progress">
  <h2>
    Raised <span class="secondary">$335</span> of
    <span class="secondary"> ${props.max}</span>
    {/* props is still an object, it just has one property on it right now; max */}
  </h2>
</section>
  )
};


export default Progress;
