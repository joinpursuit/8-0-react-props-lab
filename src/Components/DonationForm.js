const DonationForm = (props) => {
  const {donations} = props;
  return (
    <section>
      <h3>You could be donation <span className="totalNum">#{donations.length +1 }!</span></h3>
    
      <form className="input">
        <label for="name" className="input">Name</label>
        <input className="input" type="text" id="name" placeholder="Your name..." />
        <label for="caption" className="input">Caption</label>
        <input className="input" type="text" id="caption" placeholder="Add a brief message..." />
        <label for="amount" className="input">Amount</label>
        <input className="input"type="number" id="amount" placeholder="0" />
        <div className="submitButton">
          <button>Donate!</button>
        </div>
      </form>
    </section>
  )
};

export default DonationForm;
