const DonationForm = (props) => {
  return (
    <section class="donation">
      <h3>You could be donation <span class="secondary">#{props.position}!
      </span></h3>
      <form>
        <label>
          Name
          <input id="name" name="name" type="text" placeholder="Your name..." />
        </label>
        <label>
          Caption
          <input id="caption" name="caption" type="text" placeholder="Add a brief message..." />
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
