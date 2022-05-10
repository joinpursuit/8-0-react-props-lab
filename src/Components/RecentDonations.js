const RecentDonations = (props) => {
  const { donations } = props;
  const donateList = donations.map((donate) => {
    return (
      <li>
        <span>
          {donate.name} donated ${donate.amount}
        </span>
        {donate.caption}
      </li>
    );
  });
  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>{donateList}</ul>
    </section>
  );
};

export default RecentDonations;
