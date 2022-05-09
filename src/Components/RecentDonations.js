

// interloate the prop -donations- from the parent.js file you are going to use in the child.js file - TO GET A LISTING  OF ALL DONATIONS 
const RecentDonations = ({donations}) => {
  return(
  <div>
    <h2>Recent Donations</h2>
    <ul>
      {/* loop through the donations array - for each donation create - RETURN  */}
      {donations.map((donation) => {
        return ( 
          // a listing - MUST HAVE A KEY - equal interpolated prop key value - donation.amount
      <li key={donation.id}>
        <span>
          {/* interpolate prop key value - donation.name and donation.amount */}
          {donation.name} donated ${donation.amount}
          </span>
          <br/>
          {/* interpolate prop key value - donation.caption */}
          {donation.caption}
          </li>
        )
      })}
    </ul>
  </div>
  )
};

export default RecentDonations;
