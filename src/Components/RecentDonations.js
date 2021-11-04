

const RecentDonations = (props) => {

  const arr = props.currentDonator;
  const final = arr.map((each) => {
      return <li><span>{each.name} donated ${each.amount}</span>{each.caption}.</li>
  })

return (
  <section>
   <h2>Recent Donations</h2>
    <ul>
    {final}
    </ul>
  </section>
)
};

export default RecentDonations;
