const RecentDonations = (props) => {
  // console.log(props)
  const recent = props.obj.map((donate) => {
    return (
      <li>
        <span>
          {donate.name} donated ${donate.amount}
        </span>
        {donate.caption}
      </li>
    );
  });

  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>{ recent }</ul>
    </section>
  )
};

export default RecentDonations;
