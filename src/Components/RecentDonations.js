const RecentDonations = ({donations}) => {

  return (
    // Recent Donations Need
    <section>
    <h1>Recent Donations</h1>
    <ul>
      {donations.map((donation) => {
      return(
        <li>
          <span>{donation.name} donated ${donation.amount}</span>
          {donation.caption}
        </li>
        )
      })
    }
    </ul>

    </section>
  );
};

export default RecentDonations;
