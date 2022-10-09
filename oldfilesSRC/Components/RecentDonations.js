import donations from './donations.json'
import Child from './Child'
const RecentDonations = () => {
  // console.log(donations)
  // const listItems = donations.map(donation => {
  //   return (
  //     <DonationItem 
  //     donationAmount={donation.amount}
  //     donationCaption={donation.caption}
  //     donationId={donation.id}
  //     donationName={donation.name}
  //     />
    // )
  // )
  return (
    <ul>
    <h2>Recent Donations</h2>
    {
      donations.map((donation, i) => {
        return (
          <Child amount={donation.amount} caption={donation.caption} id={donation.id} name={donation.name}/>
        )
      })
    }
    </ul>
  )
}
// }


export default RecentDonations
