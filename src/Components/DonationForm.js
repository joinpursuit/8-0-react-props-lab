const DonationForm = (props) => {
  const {length} = props
  return (
    <section>
      <h3>You could be donation<span
      class="secondary"> #{length + 1}!</span></h3>
      <form>
        <label>
          Name<br/><input
          id="name"
          name="name"
          type="text"
          placeholder="Your name..."/>
          <br/>
        </label>
        <br/>
        <label>
          Caption<br/><input
          id="caption"
          type="text"
          placeholder="Add a brief message..."/>
          <br/>
        </label>
        <br/>
        <label for="amount">
          Amount<br/><input
          id="amount"
          name="amount"
          type="number"
          placeholder="0"/>
          <br/>
        </label>
        <br/>
        <button>Donate!</button>
      </form>
    </section>
  );
};

export default DonationForm;
