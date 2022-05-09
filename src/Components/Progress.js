const Progress = (props) => {
  const { targetAmount, donations } = props;
  let total = donations.reduce((prev, current) => {
    return (prev += current.amount);
  }, 0);

  return (
    <section className='progress'>
      <h2>
        Raised <span className='secondary'>${total}</span> of {' '}
        <span className='secondary'>${targetAmount}</span>
      </h2>
    </section>
  );
};

export default Progress;
