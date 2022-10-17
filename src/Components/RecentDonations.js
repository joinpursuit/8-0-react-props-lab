export default function RecentDonations({ donations }) {
  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>
        {donations.map((donor) => {
          return (
            <li key={donor.id}>
              <span>
                {donor.name} donated ${donor.amount}
              </span>
              {donor.caption}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
