const RecentDonations = (props) => {
  const { name, amount, caption } = props;
  return (
    <ul>
      <li id="nameAmount">
        {name} donated {amount}
      </li>
      {caption}
    </ul>
  );
};

export default RecentDonations;
