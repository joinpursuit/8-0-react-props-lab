const DonationForm = (props) => {
  return (
    <div>
      <section className="donation">
        <h3>You could be donation <span className="secondary">#{props.obj.length + 1}!</span></h3>
        <form>
          <label>Name<input id="name" name="name" type="text" placeholder="Your name..."/></label>
          <label>Caption<input id="caption" name="caption" type="text" placeholder="Add a brief message..."/></label>
          <label>Amount<input id="amount" name="amount" type="number" placeholder="0"/></label><button>Donate!</button>
        </form>
      </section>
    </div>
  );
};

export default DonationForm;
