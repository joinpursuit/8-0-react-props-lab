const Progress = ({prop,total}) => {
  // return null;
  const raised = prop.reduce((acc, {amount}) => {
       return acc + amount
  },0)
  return(
    <section className="progress">
      <h2>
        Raised <span className="secondary">${raised}</span> of <span className="secondary">${total}</span>
      </h2>
    </section>
  )
};

export default Progress;
