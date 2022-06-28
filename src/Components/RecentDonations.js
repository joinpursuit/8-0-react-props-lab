const RecentDonations = (props) => {
  console.log(props.donations)
  return (
    <div>
      {/* <h4>Recent Donations</h4> */}
        <h5 className='my-4'>Recent Donations</h5>
      <ul className="col-4 list-unstyled recent-donations">
        {props.donations.map((donation) => {

        return (
          <li key = {donation.id}>
          <div className="media-body">
            <h5 className="mt-0 mb-1">{donation.name} donated {donation.amount}</h5>
            {donation.caption}
          </div>
        </li> )
        })}
      </ul>
    </div>
  );
};

export default RecentDonations;
