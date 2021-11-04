const RecentDonations = (props) => {
  // console.log(props);
  const {donations} = props
  const recentDonors = donations.map((donation) => {
    return (
      <li key={donation.id}>
        <span>{donation.name} donated ${donation.amount}</span>
        {donation.caption}
      </li>
    );
  });
  return (
    <div>
      <h2>Recent Donations</h2>
      <ul>{recentDonors}</ul>
    </div>
  );
};

export default RecentDonations;
