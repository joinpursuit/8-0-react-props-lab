export default function Progress({targetAmount, donations}) {

  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${
          donations.reduce((acc, donation) => {
              return acc += donation.amount
            }, 0)
          }
        </span> of
        <span className="secondary"> ${targetAmount}</span>
      </h2>
    </section>
  )
}
