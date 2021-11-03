const Progress = (props) => {
  const progress = props.donations.map(({amount}) => amount).reduce((a, b) => a + b)
  
  return (
    <>
      <section class="progress">
      <h2>Raised <span class="secondary">${progress}</span> of
      <span class="secondary"> ${props.target}</span>
      </h2>
      </section>
    </>
  );
};

export default Progress;
