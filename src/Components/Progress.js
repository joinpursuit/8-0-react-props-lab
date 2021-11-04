

const Progress = (props) => {
  
  const arr = props.current;
  let sum = 0
  arr.map((each) => sum += each.amount)

  return (
  <section class="progress">
    <h2>
     Raised <span class="secondary">${sum}</span> of
     <span class="secondary"> ${props.max}</span>
    </h2>
  </section>)
};

export default Progress;
