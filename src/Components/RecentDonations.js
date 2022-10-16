export default function RecentDonations({ donations }) {
  return donations.map((donation) => {
      const { name, amount, caption } = donation;
    return(<section>
      <h2>Recent Donations</h2>
      <ul>
        <li>
          <span>
            {name} donated {amount}
          </span>
          {caption}
        </li>
      </ul>
    </section>);
  });
}
