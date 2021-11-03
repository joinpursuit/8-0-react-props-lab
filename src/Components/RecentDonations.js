const RecentDonations = (props) => {
  const result = props.donations.map((element) => <li><span>{element.name} donated ${element.amount}</span>{element.caption}</li>)
  return (
    <section>
    <h2>Recent Donations</h2>
    <ul>
      {result}
    </ul>
</section>
  );
};

export default RecentDonations;

