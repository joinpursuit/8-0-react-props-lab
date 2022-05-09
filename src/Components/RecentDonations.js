export default function RecentDonations(donations) {
  const { name, amount, caption } = donations;
  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>
        <li><span>{name} donated ${amount}</span>{caption}</li>
        {/* <li><span>Rami donated $10</span>Here, take a break from work!</li>
    <li><span>Michelle donated $20</span>LOL! You are too funny. Happy to do this for you. :)</li>
    <li><span>Malinda donated $5</span>Have fun!</li>
    <li><span>Sam donated $30</span>Come visit me in Miami!</li> */}
      </ul>
    </section>
  );
};

