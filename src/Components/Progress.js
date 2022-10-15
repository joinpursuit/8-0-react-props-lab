export default function Progress({targetAmount, donations}) {

  const DonationAmount = (donations) => {
    donations.map((donation) => {
      let sum =0
      sum += donation.amount
      return sum
    })
  }

  return (
    <section className="progress">
  <h2>
    Raised <span className="secondary">${DonationAmount}</span> of
    <span className="secondary">{targetAmount}</span>
  </h2>
</section>
  )
}
