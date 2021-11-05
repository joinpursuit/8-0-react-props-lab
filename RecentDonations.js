const RecentDonations = (props) => {
  const recent = props.donations.map((prop) => {
    return (
      <li>
        <span>{prop.name} donated ${prop.amount}</span>
        {prop.caption}
      </li>
    )
  })
  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>
        {recent}
      </ul>
    </section>
  )
};

export default RecentDonations;
