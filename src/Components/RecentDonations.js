const RecentDonations = ({ donations }) => {
  return (
    <div>
      <section>
        <h2>Recent Donations</h2>
        <ul>
          {donations.map((donation) => {
            return (
              <li>
                <span>
                  {donation.name} donated ${donation.amount}
                </span>
                {donation.caption}
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}

export default RecentDonations
