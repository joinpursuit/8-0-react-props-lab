
const Progress = (props) =>  {
  let donations = props.donation
  let total = 0
  donations.map((contribution) => total += contribution.amount);

  
  return (
    <section class="progress">
      <h2>Raised <span class="secondary">${total}</span> of <span class="secondary">${props.max}</span></h2>
    </section>
  )
  

}



export default Progress;




