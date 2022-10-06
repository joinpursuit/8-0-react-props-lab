const RecentDonations = ({prop}) => {
  // return null;
  // {name, amount, caption}

  return(
    <section>
    <h2>Recent Donations</h2>
    <ul>
      {prop.map(({name, amount, caption}) => {
      return(
        <li>
          <span>
          {name} donated ${amount}
          </span> {caption}
        </li>
      )  
    })}
    </ul>
      
    </section>
  )
};

export default RecentDonations;
