
//import donations from "../App";

// let total = function total (donations) {
//   let acc = 0;
//   for (const donations of donation) {
//     if (donations.amount){
//       acc += donation.amount;
//     }
//   }
//   return acc;

// }

const Progress = (props, target) =>  {

  let initialValue = 0
  const total = props.donations.reduce(function (accumulator, currentValue) {
    return accumulator += currentValue.amount
  }, initialValue)
  
  return (
    <section class="progress">
      <h2>Raised <span class="secondary">${total}</span> of <span class="secondary">${props.max}</span></h2>
    </section>
  )
  

}



export default Progress;




