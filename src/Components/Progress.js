

const Progress = (props) => {
  return (
  <section className="progress">
  <h2>
    Raised <span className="secondary">${props.raised}</span> of
    <span className="secondary"> ${props.targetAmount} </span>
  </h2>
</section>
  )
 
};

export default Progress;
