const RecentDonations = (props) => {
  const { name, amount, caption } = props
  return (
  <section>
  <h2>Recent Donations</h2>
  <ul>
    <li><span>{name} donated ${amount}</span>{caption}</li>
  </ul>
</section>
  )
};

export default RecentDonations;
