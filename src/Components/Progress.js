const Progress = ({ targetAmount, donations }) => {
  let total = donations.reduce((prev, current) => {
    return (prev += current.amount);
  }, 0);
  console.log(total);
  return (
    <div className='progress'>
      <h2>
        Raised <span className='secondary'>${total}</span> of{' '}
        <span className='secondary'>${targetAmount}</span>
      </h2>
    </div>
  );
};
