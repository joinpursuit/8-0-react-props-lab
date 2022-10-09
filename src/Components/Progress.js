function Progress({target, donorNum}) {
  return (
    <h2>Raised <span className="secondary">${donorNum}</span> of <span className="secondary">${target}</span>

    </h2>
  )
}
export default Progress