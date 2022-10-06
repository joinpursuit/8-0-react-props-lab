const DonationForm = ({donations}) => {
  return (
    <div>
       <h3>You could be donation <span className="secondary">#{donations.length + 1}!</span></h3>
   <form>
     <label htmlFor="name">Name
    <br></br>
    <input id="name" name="name" type="text" placeholder="Your name..." /></label>
    <br></br>
    <label htmlFor="caption">Caption
    <br></br>
    <input id="caption" name="caption" type="text" placeholder="Add a brief message..." /></label>
    <br></br>
    <label htmlFor="amount">Amount
    <br></br>
    <input id="amount" name="amount" type="number" placeholder="0"/></label>
    <p></p>
    <button>Donate!</button>
  </form>
    </div>
  )

};

export default DonationForm;
