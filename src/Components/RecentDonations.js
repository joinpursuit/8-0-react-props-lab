const RecentDonations = (props) => {

  const arr = props.currentDonator;
  
  const recents = arr.map((donor) => {
   return ( <li><span>{donor.name} donated ${donor.amount}</span>{donor.caption}</li>
   )
  })
  
  return (
    <section>
     <h2>Recent Donations</h2>
      <ul>
      {recents}
      </ul>
    </section>
  )
  };
  
  export default RecentDonations;