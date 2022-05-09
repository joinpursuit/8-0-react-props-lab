const RecentDonations = (props) => {
  const { donations } = props;
  const recent = donations.map((donation) => {
    const { id, name, caption, amount } = donation;
    return (
      <li key={id}>
        <span>
          {name} donated ${amount}
        </span>
        {caption}
      </li>
    );
  });
  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>{recent}</ul>
    </section>
  );
};

export default RecentDonations;
