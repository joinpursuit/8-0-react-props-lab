const RecentDonations = (donation) => {
  return(
    <li>
      <span>{donation.donationName} has donated ${donation.donationAmount}</span>{donation.donationCaption}<span></span>
    </li>
)

}
export default RecentDonations;