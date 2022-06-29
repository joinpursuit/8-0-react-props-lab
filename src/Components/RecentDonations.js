const RecentDonations = (props) => {
  const donations = props.donations;
  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>
        {donations.map((donation) => {
          const { amount, caption, id, name } = donation;
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
