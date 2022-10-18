export default function Progress({ donoTotal, targetAmount }) {

  
  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${donoTotal}</span> of
        <span className="secondary"> ${targetAmount}</span>
      </h2>
    </section>
  );
}
