const Progress = ({target, donations}) => {
  return(
  <section className="progress">
  <h2>
    Raised{''} 
    <span className="secondary">
    ${donations.reduce((a,d) => (a += d.amount), 0)}
    </span>{''}
    of
    <span className="secondary">${target}</span>
  </h2>
  </section>
  )
};

export default Progress;
