const Progress = (props) => {
  const {totalAmount, targetAmount} = props
  console.log(props)
  // let totalAmount = 0;
  // {
  //   donations.map((individual) => {
  //     return (
  //       totalAmount += individual.amount
  //       );
  //   });
  // }
  return (
    <section class="progress">
      <h2>
        Raised <span class="secondary">${totalAmount}</span> of <span class="secondary"> ${targetAmount}</span>
      </h2>
    </section>
  );
};

export default Progress;
