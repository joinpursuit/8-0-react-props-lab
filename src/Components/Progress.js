export default function Progress({donations, targetAmount}) {
  let total = donations.reduce((a,c)=> a +c.amount, 0)
  return (
<section className="progress">
<h2>
  Raised <span className="secondary">${total}</span> of
  <span className="secondary"> ${targetAmount}</span>
</h2>
</section>
  );
}
