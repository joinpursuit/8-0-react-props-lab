const Progress = (props) => {
const {targetAmount, raised} = props
  return (<section className="progress">
  <h2>
    Raised <span className="secondary">${raised}</span> of
    <span className="secondary"> ${targetAmount}</span>
  </h2>
</section>);
};

export default Progress;
