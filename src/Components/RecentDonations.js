const RecentDonations = ({donations}) => {
  return (
    <ul key={donations.id}>{donations.map((donate) =>{
      return <li><span>{donate.name} donated ${donate.amount}</span>{donate.caption}</li>

    })}
  </ul>
  ) ;
};

export default RecentDonations;
