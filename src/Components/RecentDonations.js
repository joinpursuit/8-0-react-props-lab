export default function RecentDonations(props) {
  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>
        {props.donations.map((donate) => (
          <li key={donate.id}>
            <span>
              {donate.name} donated ${donate.amount}
            </span>
            {donate.caption}
          </li>
        ))}
      </ul>
    </section>
  );}