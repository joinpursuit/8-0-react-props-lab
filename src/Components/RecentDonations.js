const RecentDonations = (props) => {
  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>
        <li>
          <span>
            {props.name} {props.amount}
          </span>
          {props.caption}
        </li>
      </ul>
    </section>
  );
};

export default RecentDonations;
