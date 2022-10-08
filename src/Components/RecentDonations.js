
const RecentDonations = ({donations}) => {
 console.log ({donations})
 
  return (
    <section>
      {donations.map((dono)=>{ 
        return(
          <ul>
            <li><span>{dono.name} donated ${dono.amount}</span>{dono.caption}</li>
               
            
            </ul>
          )
        }
      )}
    </section>
   );
  };

export default RecentDonations;
