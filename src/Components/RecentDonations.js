const RecentDonations = (props) => {
  // const {name, caption, amount} = props
  console.log(props)
  const recentDonors = props.donations.map((donation,index) => {
    return (
      <li>
        <p>{donation.name} donated ${donation.amount}</p>
        <p>{donation.caption}</p>
      </li>)
  })
  return (
    <div>
      <h2>Recent Donations</h2>
      <ul>
        {recentDonors}
      </ul>
    </div>
    );
};

export default RecentDonations;
