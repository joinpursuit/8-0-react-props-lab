/** @format */
import React, { useState } from 'react';
import { donations } from '../App';

const DonationForm = (props) => {
	let { totalDonations } = props;
	console.log(totalDonations);

	const [amount, setAmount] = useState();

	const handleClick = (e) => {
		e.preventDefault();
		console.log(e.target.value);
		let currentTotal = totalDonations + 1;
		currentTotal++;
		return currentTotal;
	};

	const handleChange = (e) => {
		e.preventDefault();
		setAmount(e.target.value);
	};

	console.log(amount);

	return (
		<section className='donation'>
			<h3>
				You could be donation{' '}
				<span className='secondary'>#{donations.length + 1}!</span>
			</h3>
			<form onSubmit={handleClick}>
				<label>
					Name
					<input id='name' name='name' type='text' placeholder='Your name...' />
				</label>
				<label>
					Caption
					<input
						id='caption'
						name='caption'
						type='text'
						placeholder='Add a brief message...'
					/>
				</label>
				<label htmlFor='amount'>
					Amount
					<input
						id='amount'
						name='amount'
						type='number'
						placeholder='0'
						onChange={handleChange}
					/>
				</label>
				<button type='submit'>Donate!</button>
			</form>
		</section>
	);
};

export default DonationForm;
