export default function RecentDonations({ donations }) {
  const liFromArr = donations.map((donation) => (
    <li key={donation.id}>
      <span>
        {donation.name} donated ${donation.amount}
      </span>
      {donation.caption}
    </li>
  ));

  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>{liFromArr}</ul>
    </section>
  );
}
