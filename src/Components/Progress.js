export default function Progress({ donations }) {
  let total = donations.reduce((a, c) => a + c.amount, 0);
  return (
    <>
      <h2>
        Raised <span className="secondary">${total}</span> of
        <span className="secondary"> $1000</span>
      </h2>
    </>
  );
}
