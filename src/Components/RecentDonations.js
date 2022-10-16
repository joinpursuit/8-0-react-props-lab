const RecentDonations = ({ donations }) => {
  return (
    <section>
      <h2>Recent Donations</h2>
        <ul>
          {donations.map(({name, amount, caption}) => {
            return (
              <li key={name}>{name} donated ${amount} - {caption}</li>
            );
          })}
        </ul>
    </section>
  )
}

export default RecentDonations;