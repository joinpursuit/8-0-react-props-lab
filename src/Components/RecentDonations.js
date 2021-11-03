const RecentDonations = (props) => {
  let recent = props.donations.map((donation) => {
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
      <ul>{recent}</ul>
    </section>
  );
};
export default RecentDonations;
