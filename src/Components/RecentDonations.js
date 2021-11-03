const RecentDonations = ({donations}) => {

  let someDonation = donations.map((donation)=> {
  const {name, amount, caption} = donation
    return  <li><span>{name} donated ${amount}</span>{caption}</li>
  })
  
  return (
    <section>
    <h2>Recent Donations</h2>
     <ul>
      {someDonation}
     </ul>
    </section>
    );
  };

  export default RecentDonations;