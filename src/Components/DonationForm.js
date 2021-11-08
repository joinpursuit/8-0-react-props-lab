const DonationForm = (props) => {
  const {donations} = props;
  return (
    <section>
      <h3>You could be donation #{donations.length +1 }!</h3>
    
      <form>
        <label for="name">Name</label>
        <input type="text" id="name" placeholder="Your name..." />
        <label for="caption">Caption</label>
        <input type="text" id="caption" placeholder="Add a brief message..." />
        <label for="amount">Amount</label>
        <input type="number" id="amount" placeholder="0" />
 
        <input type="submit" value="Donate!" />
      </form>
    </section>
  )
};

export default DonationForm;
