const RecentDonations = (props) => {
  const {donations} = props;
  const recentDonationsList = donations.map((donationInfo) => {
    return (
      <li key={donationInfo.id}>
        <span>{donationInfo.name} donated ${donationInfo.amount}</span>
        {donationInfo.caption}
      </li>
    )
  })
  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>{recentDonationsList}</ul>
    </section>
  );
};

export default RecentDonations;
