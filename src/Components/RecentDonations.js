const RecentDonations = (props) => {
  const { amount, caption, id, name } = props;
  return (
    <section>
      <ul>
        <li>
          <span>
            {name} donated ${amount}
          </span>
          {caption}
        </li>
      </ul>
    </section>
  );
};

export default RecentDonations;
