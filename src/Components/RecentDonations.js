export default function RecentDonations({donationsData}) {
  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>
        {donationsData.map((donation => {
            return <li><span>{donation.name} donated ${donation.amount}</span>{donation.caption}</li>
          }))}
      </ul>
    </section>
  );
}

    