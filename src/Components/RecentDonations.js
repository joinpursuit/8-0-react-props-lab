const RecentDonations = (props) => {
  const { targetAmount, donations } = props;
  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>
        {donations.map((donation) => {
          return (
            <li key={donation.id}>
              <span>
                {donation.name} donated ${donation.amount} dollars{' '}
                {donation.caption}
              </span>
            </li>
          );
        })}
        <li>
          <span>Jo donated $25</span>You really need this. Really.
        </li>
        <li>
          <span>Rami donated $10</span>Here, take a break from work!
        </li>
      </ul>
    </section>
  );
};

export default RecentDonations;
