const RecentDonations = (props  ) => {
  console.log(props, props.donations);
  let recent = props.donations.map(({ name, amount, caption }) => {
    return (
      <li>
        <span>
          {name} donated {"$" + amount}
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
