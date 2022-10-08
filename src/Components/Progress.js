const Progress = ({ amountDonation, targetAmount }) => {
  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${amountDonation}</span> of
        <span className="secondary"> ${targetAmount}</span>
      </h2>
    </section>
  )
}

export default Progress
