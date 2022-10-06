const RecentDonations = ({ donations }) => {
  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>
        {donations.map(({ id, amount, caption, name }) => {
          return (
            <li key={id}>
              <span>
                {name} donated ${amount}
              </span>
              {caption}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default RecentDonations;
