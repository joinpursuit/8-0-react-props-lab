const Progress = ({targetAmount, total}) => {
  

  return (
    <section className="progress">
  <h2>
    Raised <span className="second">${total}</span> of
    <span className="second"> ${targetAmount}</span>
  </h2>
</section>
  )
};
export default Progress;