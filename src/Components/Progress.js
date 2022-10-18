export default function Progress({ donations }) {
  const totalRaised = donations.reduce((a,b) => a + b.amount, 0);
  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${totalRaised}</span>
        <span className="secondary"> of $1000</span>
      </h2>
    </section>
  );
}
