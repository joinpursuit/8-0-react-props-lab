const Progress = (props) => {
  const { targetAmount } = props
  let sum = 0
  props.obj.map((element) => {
    sum += element.amount
  })
  return (
    <div>
      <section className="progress">
        <h2>
          Raised <span className="secondary">${ sum }</span> of
          <span className="secondary"> ${ targetAmount }</span>
        </h2>
      </section>
    </div>
  );
};

export default Progress;