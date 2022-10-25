import RecentDonation from "./RecentDonation"

export default function RecentDonations({donations}) {
  return (
    <section>
  <h2>Recent Donations</h2>
  <ul>
    {donations.map((donation) => {
      return <RecentDonation donation={donation}/>
    })}
  </ul>
</section>
  )
}
