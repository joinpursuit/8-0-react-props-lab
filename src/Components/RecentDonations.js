const RecentDonations = ({ donations }) => {
  return (
    <div>
      <ul>
        {Object.values(donations).map(({ name, amount, caption }) => {
          return (
            <li>
              <span>
                {name} donated ${amount}
              </span>
              {caption}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RecentDonations;
