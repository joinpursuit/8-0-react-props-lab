export default function RecentDonations({ donations }) {
  return (
    <>
      <h2>Recent Donations</h2>
      <ul>
        {donations.map((d) => {
          return (
            <li key={d.id}>
              <span>
                {d.name} donated ${d.amount}
              </span>
              {d.caption}
            </li>
          );
        })}
      </ul>
    </>
  );
}
