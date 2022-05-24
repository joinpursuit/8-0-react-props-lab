const Progress = ({targetAmount, donations}) => {
  let raisedMoney = 0 
  {
   donations.map((donation) => {
    raisedMoney += donation.amount;
   })
 }
   return (
     <section class="progress">
   <h2>
     Raised <span class="secondary">${raisedMoney}</span> of 
     <span class="secondary"> ${targetAmount}</span>
   </h2>
 </section>
   )
 };

 export default Progress;