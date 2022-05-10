const RecentDonations = (props) => {
	const { donations } = props;

	return (
		<section>
			<h2>Recent Donations</h2>
			<ul>
				{donations.map((item) => {
					return (
						<li>
							<span>
								{item.name} donated ${item.amount}
							</span>{" "}
							{item.caption}
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default RecentDonations;
