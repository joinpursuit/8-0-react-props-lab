const Progress = (props) => {
  return (
    <section class="progress">
      <h2>
        Raised <span class="secondary">${props.donations.map(donation=>donation.amount).reduce((a,b)=> a+b)}</span> of
        <span class="secondary"> ${props.targetAmount}</span>
      </h2>
  </section>
  );
};

export default Progress;
