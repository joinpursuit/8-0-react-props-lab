const RecentDonations = (props) => {
  const { name, amount, caption } = props;
  return (
    <ul>
      <li>
        <span>
          {name} donated ${amount}
        </span>
        {caption}
      </li>
    </ul>
  );
};

export default RecentDonations;
