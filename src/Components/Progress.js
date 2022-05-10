const Progress = (props) => {
	const { targetAmount, donations } = props;
	let donatedAmount = 0;
	donations.map((donation) => {
		donatedAmount += donation.amount;
	});
	return (
		<section class="progress">
			<h2>
				Raised <span class="secondary">${donatedAmount}</span> of
				<span class="secondary"> ${targetAmount}</span>
			</h2>
		</section>
	);
};

export default Progress;
