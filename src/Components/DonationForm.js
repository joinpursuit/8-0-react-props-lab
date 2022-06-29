import { React, useState } from "react";
const DonationForm = (props) => {
  const [name, setName] = useState("");
  const [caption, setCaption] = useState("");
  const [amount, setAmount] = useState(0);

  const handleNane = (e) => {
    const { value } = e.target;
    setName(value);
  };
  const handleCaption = (e) => {
    const { value } = e.target;
    setCaption(value);
  };
  const handleAmount = (e) => {
    const { value } = e.target;
    setAmount(parseInt(value));
  };
  const handleSubmit = (e) => {
    const id = props.donations[props.donations.length - 1].id + 1;
    e.preventDefault();
    if (!name || !caption || !amount) {
      alert(`Please complete the Donation form!`);
    } else {
      props.setAllDonations([
        { id, name, caption, amount },
        ...props.donations,
      ]);
    }
  };
  return (
    <section className='donation'>
      <h3>
        You could be donation{" "}
        <span className='secondary'>#{props.donations.length + 1}!</span>
      </h3>

      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            id='name'
            name='name'
            type='text'
            placeholder='Your name...'
            value={name}
            onChange={handleNane}
          />
        </label>
        <label>
          Caption
          <input
            id='caption'
            name='caption'
            type='text'
            placeholder='Add a brief message...'
            value={caption}
            onChange={handleCaption}
          />
        </label>
        <label htmlFor='amount'>
          Amount
          <input
            id='amount'
            name='amount'
            type='number'
            placeholder='0'
            value={amount}
            onChange={handleAmount}
          />
        </label>
        <button>Donate!</button>
      </form>
    </section>
  );
};

export default DonationForm;
