export default function RecentDonations({ recDon }) {
  // return null;
  return (
    // <div className="RecentDonations">
    //   {recDon.map((donation) => (
    //     <div>{donation.amount}</div>
    //   ))}
    // </div>
    <section className="RecentDonations">
      <h2>Recent Donations</h2>
      <ul>
        {recDon.map((donation) => (
          <li>
            <span>
              {donation.name} donated ${donation.amount}
            </span>
            {donation.caption}
          </li>
        ))}
      </ul>
    </section>
  );
}
