const RecentDonations = (props) => {
  const { donations } = props;
  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>
        {donations.map((liDonation) => {
          return (
            <li>
              <span>
                {liDonation.name} donated ${liDonation.amount}{" "}
              </span>
              {liDonation.caption}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default RecentDonations;
