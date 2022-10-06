const RecentDonations = ({ donationArray }) => {
  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>
        {donationArray.map(({ amount, name, caption, id }) => {
          return (
            <li key={id}>
              <span>
                {name} ${amount}
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
