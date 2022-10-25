export default function Progress({totalAmount}) {
  return (
    <section className="progress">
  <h2>
    Raised <span className="secondary">${totalAmount}</span> of
    <span className="secondary">$1000</span>
  </h2>
</section>
  )
}
