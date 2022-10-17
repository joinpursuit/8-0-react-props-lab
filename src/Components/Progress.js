export default function Progress({ total, targetAmount }) {
  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${total}</span> of
        <span className="secondary"> ${targetAmount}</span>
      </h2>
    </section>
  );
}
