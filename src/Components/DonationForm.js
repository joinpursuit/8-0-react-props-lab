import RecentDonations from "./RecentDonations"

const DonationForm = ({donations}) => {
  console.log(donations.length)

  const donate = () =>{
    return(
    <RecentDonations>
    <ul>
    <li>
      <span>{donations.name} donated ${donations.amount}</span>{donations.caption}</li>
       
    
    </ul>
</RecentDonations>
    )
  }

  return(
  
  <section className="donation">
  <h3>You could be donation <span class="secondary">#{donations.length+1}!</span></h3>
  <form>
    <label htmlFor="name"
      >Name<input
        id="name"
        name="name"
        type="text"
        placeholder="Your name..." /></label
    ><label htmlFor="caption"
      >Caption<input
        id="caption"
        name="caption"
        type="text"
        placeholder="Add a brief message..." /></label
    ><label htmlFor="amount"
      >Amount<input
        id="amount"
        name="amount"
        type="number"
        placeholder="0" /></label
    ><button onClick={donate}>Donate!</button>
  </form>
</section>)
}

export default DonationForm;
