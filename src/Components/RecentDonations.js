const RecentDonations = (props) => {
  const listDonations = props.donations.map((item) => {
    return (
      <li>
        <span>
          {item.name} donated ${item.amount}
        </span>
        {item.caption}
      </li>
    );
  });

  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>{listDonations}</ul>
    </section>
  );
};

export default RecentDonations;
