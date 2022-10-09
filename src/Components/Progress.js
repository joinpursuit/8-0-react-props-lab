export default function Progress({ donations, targetAmount }) {
  return (
    <section className="progress">
      <h2>
        Raised{" "}
        <span className="secondary">
          ${donations.reduce((acc, curr) => acc + curr.amount, 0)}
        </span>{" "}
        of
        <span className="secondary"> ${targetAmount}</span>
      </h2>
    </section>
  );
}
