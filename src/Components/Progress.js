const Progress = (props) => {
  const { targetAmount } = props
  return (
    <div>
      <section className="progress">
        <h2>
          Raised <span className="secondary">$0</span> of
          <span className="secondary"> ${ targetAmount }</span>
        </h2>
      </section>
    </div>
  );
};

export default Progress;


//Still have to make $0 dynamic//