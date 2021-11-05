const DonationForm = (props) => {
  const CurrentCount = props.donations.length + 1;
  return (
    <section className="donation">
      <h3>You could be donation <span className="secondary">#{CurrentCount}!</span></h3>
      <form>
        <label>
          Name
          <input id="name" name="name" type="text" placeholder="Your anme..." />
        </label>
        <label>
          Caption
          <input i="caption" name="caption" type="text" placeholder="Add a brief message..." />
        </label>
        <label>
          Amount
          <input id="amount" name="amount" type="number" placeholder="0" />
        </label>
        <button>Donate!</button>
      </form>
    </section>
  );
};

export default DonationForm;
