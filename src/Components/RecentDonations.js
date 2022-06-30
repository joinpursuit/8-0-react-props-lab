/** @format */

const RecentDonations = (props) => {
	const { donationItems } = props;

	return (
		<section>
			<h2>Recent Donations</h2>
			<ul>{donationItems}</ul>
		</section>
	);
};

export default RecentDonations;
