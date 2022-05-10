const RecentDonations = (props) => {
  const { name, amount, caption } = props;
  return (
    <li>
      <span>
        {name} donated ${amount}
      </span>
      {caption}
    </li>
  );
};

export default RecentDonations;
