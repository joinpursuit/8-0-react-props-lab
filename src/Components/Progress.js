export default function Progress({ donations, targetAmount }) {
  let raisedMoney = 0;
  return (
    <section className="progress">
      <h2>
        Raised{" "}
        <span className="secondary">
          {donations.map((donation) => {
            raisedMoney += donation.amount;
          })}
          ${raisedMoney}
        </span>{" "}
        of <span className="secondary">$1000</span>
      </h2>
    </section>
  );
}
