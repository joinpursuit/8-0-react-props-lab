const RecentDonations = ( {donations} ) => {
  return (
    <section>
  <h2>Recent Donations</h2>
 <ul>
    {donations.map((x)=> {return (<li><span>{x.name} donated ${x.amount}</span>{x.caption}</li>)})}
  </ul>
</section>
  )
};

export default RecentDonations;
