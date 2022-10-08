
// amount="$19"
// caption ="my big donation" 
// id= "45" 
// name="Mary Lane"


const RecentDonations = ({name, amount, caption}) => {
  return (
    <>
{/* 
      <h2>Recent Donations</h2>
      <h4>{name} donated {amount} </h4> */}

  <section>
    <h2>Recent Donations</h2>
      <ul>
          donations.map((donation, i) => {
            return (   
            <li><span>{name} donated ${amount}</span>{caption}</li>

      </ul>
            
  </section>
  </>
  
}


export default RecentDonations;

  {/* <li><span>Rami donated $10</span>Here, take a break from work!</li> */}

  