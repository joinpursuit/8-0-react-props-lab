//?For the recent donations section, you will need to have a number of `li` elements equal to the number of donations. Each `li` should include the person who donated, the amount, and their caption.

const RecentDonations = ({ donations }) => {
  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>
        {donations.map(({ amount, name, id, caption }) => {
          return (
            <li key={id}>
              <span>
                {name} donated ${amount}
              </span>{" "}
              {caption}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default RecentDonations;
