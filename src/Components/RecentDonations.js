const RecentDonations = (props) => {
  return (
    <li><span>{props.name} donated ${props.amount}</span>{props.caption}</li>
  );
};

export default RecentDonations;

