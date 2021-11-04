const Progress = (props) => {
  const arr = props.currentDonation;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].amount;
  }
  return (
    <section class="progress">
      <h2>
        Raised <span class="secondary">${sum}</span> of
        <span class="secondary"> ${props.max}</span>
      </h2>
    </section>
  );
};

export default Progress;
