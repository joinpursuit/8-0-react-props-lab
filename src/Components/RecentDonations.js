const RecentDonations = ({ donations }) => {
  const result = donations.map((donation) => {
    const { name, amount, caption } = donation;

    return (
      <li>
        <span>
          {name} ${amount}
        </span>
        {caption}
      </li>
    );
  });

  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>{result}</ul>
    </section>
  );
};

export default RecentDonations;
