

// interloate the props -donationNumber- from the parent.js file you are going to use in the child.js file - TO GET THE NUMBER OF DONATIONS 
const DonationForm = ({donationNumber}) => {
  return (<section class="donation">
      {/* display the interpolated prop  inside of h3 tag - donationNumber */}
      <h3>You could be donation <span class="secondary">#{donationNumber}!</span></h3>
  <form>
    <label
      >Name<input
        id="name"
        name="name"
        type="text"
        placeholder="Your name..." /></label
    ><label
      >Caption<input
        id="caption"
        name="caption"
        type="text"
        placeholder="Add a brief message..." /></label
    ><label for="amount"
      >Amount<input
        id="amount"
        name="amount"
        type="number"
        placeholder="0" /></label
    ><button>Donate!</button>
  </form>
</section>)
}

export default DonationForm;
