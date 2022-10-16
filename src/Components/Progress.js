const Progress = ({ targetAmount, total }) => {
	return (
		<section className="progress">
			<h2>
				Raised <span className="secondary">${total}</span> of
				<span className="secondary"> ${targetAmount}</span>
			</h2>
		</section>
	);
};
export default Progress;
