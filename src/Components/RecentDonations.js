const RecentDonations = ({donations}) => {
  return (
    <section>
      <h2>Recent Donations</h2>
      {donations.map((donations) => {
        return (
          <ul>
            <li>
              <span>
                {donations.name} donated {donations.amount}
              </span>
              {donations.caption}
            </li>
          </ul>
        );
      })}  
    </section>
  );
};

export default RecentDonations;
