/** @format */

const Progress = (props) => {
	const { targetAmount, totalDonations } = props;
	console.log(props);
	console.log(targetAmount);
	console.log(totalDonations);

	return (
		<section className='progress'>
			<h2>
				Raised <span className='secondary'>${totalDonations}</span> of
				<span className='secondary'> ${targetAmount}</span>
			</h2>
		</section>
	);
};

export default Progress;
