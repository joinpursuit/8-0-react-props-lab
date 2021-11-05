const Progress = (props) => {
  return (
    <section class="progress">
      <h2>
        Raised 
        <span class="secondary">${props.amount}</span> of
        <span class="secondary"> ${props.target}</span>
      </h2>
    </section> 
  )
};

export default Progress;
