const RecentDonations = (props) => {
  const { donations } = props;

  const recentDonationBuilder = donations.map((donation) => {
    return (
      <li>
        <span>
          {donation.name} donated ${donation.amount}
        </span>
        {donation.caption}
      </li>
    );
  });

  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>{recentDonationBuilder}</ul>
    </section>
  );
};

export default RecentDonations;
