const Progress = (props) => {
  return (
    <section className="progress">
      <h2>
        Raised{' '}
        <span className="secondary">
          $
          {props.donations.reduce((acc, val) =>
            acc.amount ? acc.amount + val.amount : acc + val.amount
          )}
        </span>{' '}
        of
        <span className="secondary"> ${props.max}</span>
      </h2>
    </section>
  );
};

export default Progress;
