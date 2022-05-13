const DonationForm = ({ donations }) => {
  return (
    <div>
      <section className="donation">
        <h3>You could be donation #<span className="secondary">
          {donations.length + 1}!
            </span></h3>
        <form>
          <label>
            Name
            <br />
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name..."
            />
          </label>
          <label>
            Caption
            <br />
            <input
              id="caption"
              name="caption"
              type="text"
              placeholder="Add a brief message..."
            />
          </label>
          <label for="amount">
            Amount
            <br />
            <input id="amount" name="amount" type="number" placeholder="0" />
          </label>
          <br />
          <button>Donate!</button>
        </form>
      </section>
    </div>
  );
};

export default DonationForm;




