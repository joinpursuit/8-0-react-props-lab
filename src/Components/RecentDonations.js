const RecentDonations = (props) => {
  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>
        {props.donations.map((item) => (
          <li key={item.id}>
            <span>
              {item.name} donated ${item.amount}
            </span>
            {item.caption}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RecentDonations;
