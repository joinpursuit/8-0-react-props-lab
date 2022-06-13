export default function Progress({donations, targetAmount}) {
  
  let sumAmount =0;
  {donations.map((donation) => {
    sumAmount += donation.amount
  })}


  return (
    <section class="progress">
      <h2>
        Raised <span class="secondary">${sumAmount}</span> of
        <span class="secondary"> ${targetAmount}</span>
      </h2>
    </section>
  );
}

/* I want to bring in the amounts for the donations and 
add them up and then interpulate the sum in the span tag */

