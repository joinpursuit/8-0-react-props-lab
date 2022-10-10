export default function Progress(prop) {
  const { donations } = prop;
  let progress = 0 ;
  donations.map((donation) => {
    console.log(donation.amount);
    return progress += donation.amount});
  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${progress}</span> of
        <span className="secondary"> $1000</span>
      </h2>
    </section>
  );
}
