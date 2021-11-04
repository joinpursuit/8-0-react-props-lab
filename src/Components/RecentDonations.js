const RecentDonations = (props) => {
    const UserDonations = props.donations.map((donor) => {
      return (
        <li>
          <span>
            {donor.name} donated ${donor.amount}
          </span>
          {donor.caption}
        </li>
  
      );
    });
  
    return (
      <section>
        <h2> Recent Donations </h2>
        <ul> {UserDonations} </ul>
      </section>
  
    );
  };
  
  export default RecentDonations;