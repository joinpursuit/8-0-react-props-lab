export default function Progress(props) {
  const { donoTotal, targetAmount } = props;

  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${donoTotal}</span> of
        <span className="secondary"> ${targetAmount}</span>
      </h2>
    </section>
  );
}
