const Progress = (props) => {
  let donationAmount = 0;

  props.donationsArr.forEach(donation => {
    donationAmount += donation.amount;
  });
  
  return (
    <section class="progress">
      <h2>
        Raised <span class="secondary">${donationAmount}</span> of
        <span class="secondary"> $1000</span>
      </h2>
    </section>

  );
};

export default Progress;
