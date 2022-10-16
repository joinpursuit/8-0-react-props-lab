// import RecentDonations from "./RecentDonations"; why is this here?
// why is this here?

export default function Progress({ donationsRaised , targetAmount1 }) {
  return (
    <section className="progress">
      <h2>Raised <span className="secondary">${donationsRaised}</span> of <span className="secondary">${targetAmount1}</span></h2>
    </section>
  );
}