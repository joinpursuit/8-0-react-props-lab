const DonationForm = ({ donations }) => {
  return (
    <div className='donation'>
      <h3>
        You could be donation <span class='secondary'>#{donations}!</span>
      </h3>
      <form>
        <label>
          Name:
          <input type='text' name='name' id='name' placeholder='Your name' />
        </label>

        <label>
          Caption:
          <input
            type='text'
            name='caption'
            id='caption'
            placeholder='Add a brief message'
          />
        </label>

        <label>
          Amount:
          <input type='number' name='amount' id='amount' placeholder='0' />
        </label>

        <button>Donate</button>
      </form>
    </div>
  );
};

export default DonationForm;
