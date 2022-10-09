export default function Progress({ donations, target }) {
  let total = donations.reduce((a, c) => a + c.amount, 0);
  return (
    <>
      <h2>
        Raised <span className="secondary">${total}</span> of
        <span className="secondary"> ${target}</span>
      </h2>
    </>
  );
}
