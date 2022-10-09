export default function Progress(props) {
  const {total,target} = props;
  return (
    <section className="progress">
      <progress value={total} max={target}></progress>

      <h2>Raised<span className="secondary"> ${total}</span> of <span>${target}</span></h2>
    </section>
  );
}
