const RecentDonations = ({ donations }) => {
  return (
    <ul> {donations.map(donation => {
     return <li>
              <span>
                {donation.name} donated ${donation.amount}
              </span>
              {donation.caption}
            </li>
            })}
    </ul>
  );
};

export default RecentDonations;
