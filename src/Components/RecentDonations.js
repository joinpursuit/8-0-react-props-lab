const RecentDonations = ({ donations }) => {
	return (
		<>
			<h2>Recent Donations</h2>
			<ul>
				{donations.map((donation) => {
					return (
						<li key={donation.id}>
							<span>
								{donation.name} donated ${donation.amount}
							</span>
							{donation.caption}
						</li>
					)
				})}
			</ul>
		</>
  );
}

export default RecentDonations;
