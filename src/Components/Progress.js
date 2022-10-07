const Progress = ({ donations, targetAmount }) => {
  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">$0</span> of
        <span className="secondary">${targetAmount}</span>
      </h2>
    </section>
  )
}

export default Progress
