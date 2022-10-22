
const RecentDonations = ({ donations }) => {
  return (
    <section>
      <h2>Recent Donations</h2>
      {donations.map((donation) => {
        return (
          <ul>
            <li>
              <span>
                {donation.name} donated ${donation.amount}
              </span>
              {donation.caption}
            </li>
          </ul>
        );
      })}
    </section>
  );
};

export default RecentDonations;