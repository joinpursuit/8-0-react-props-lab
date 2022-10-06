const Progress = ({prop,total}) => {
  // return null;
  const raised = prop.reduce((acc, {amount}) => {
       return acc + amount
  },0)
  return(
    <>
      <h2>Raised <span className="secondary">${raised}</span> of <span className="secondary">${total}</span></h2>
    </>
  )
};

export default Progress;
