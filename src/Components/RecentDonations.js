const RecentDonations = (dono) => {
  let recent = dono.donations.map((dono) => {
    return (
      <li>
        <span>
          {dono.name} donated ${dono.amount}
        </span>
        {dono.caption}
      </li>
    );
  });
  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>{recent}</ul>
    </section>
  )
};

export default RecentDonations;
