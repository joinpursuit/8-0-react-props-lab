const DonationForm = (dono) => {
  return (
    <section class="donation">
      <h3>
        Your donation <span class="Secondary">#{dono.donations}!</span>
      </h3>
      <form>
        <label>
          Name
          <input id="name" name="name" type="text" placeholder="Su Nombre es..." />
        </label>
        <label>
          Caption
          <input id="caption" name="caption" type="text" placeholder="Tu mensaje breva..." />
        </label>
        <label for="amount">
          Amount
          <input id="amount" name="amount" type="number" placeholder="0" />
        </label>
        <button>Donaccion!</button>$
      </form>
    </section>
  )
};

export default DonationForm;
