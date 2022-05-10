const Progress = (props) => {
	const { donations } = props;
	return (
		<section class="progress">
			<h2>
				Raised{" "}
				<span class="secondary">
					${donations.reduce((prev, donation) => prev + donation.amount, 0)}
				</span>{" "}
				of <span class="secondary">$1000</span>
			</h2>
		</section>
	);
};

export default Progress;
