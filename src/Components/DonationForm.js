import React, { useEffect, useState } from "react";

export default function DonationForm({ counter }) {
  const [name, setName] = useState("");
  const [caption, setCaption] = useState("");
  const [amount, setAmount] = useState("");
  const donatorList = [];

  function handleSubmit(event) {
    event.preventDefault();
    console.log("form submitted");
    return donatorList.push({
      name: { name },
      caption: { caption },
      amount: { amount },
      id: { counter },
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>You could be donation #{counter}!</h1>
      <label htmlFor="name">
        Name:
        <input
          type="text"
          id="name"
          onChange={(event) => setName(event.target.value)}
        ></input>
      </label>
      <label htmlFor="caption">
        Caption:
        <input
          type="text"
          id="Caption"
          onChange={(event) => setCaption(event.target.value)}
        ></input>
      </label>
      <label htmlFor="Amount">
        Amount:
        <input
          type="text"
          id="Amount"
          onChange={(event) => setAmount(event.target.value)}
        ></input>
      </label>
      <button type="submit">Donate!</button>
    </form>
  );
}
