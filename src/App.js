/** @format */

import React from 'react';
import TopBar from './Components/TopBar';
import DonationForm from './Components/DonationForm';
import Progress from './Components/Progress';
import './App.css';
import RecentDonations from './Components/RecentDonations';

const targetAmount = 1000;
export const donations = [
	{
		amount: 250,
		caption: 'You really need this. Really.',
		id: 1,
		name: 'Jo',
	},
	{
		amount: 30,
		caption: 'Here, take a break from work!',
		id: 2,
		name: 'Rami',
	},
	{
		amount: 20,
		caption: 'LOL! You are too funny. Happy to do this for you. :)',
		id: 3,
		name: 'Michelle',
	},
	{
		amount: 5,
		caption: 'Have fun!',
		id: 4,
		name: 'Malinda',
	},
	{
		amount: 30,
		caption: 'Come visit me in Miami!',
		id: 5,
		name: 'Sam',
	},
];

let amount = donations.map((item) => {
	return item.amount;
});

let totalDonations = amount.reduce(
	(prevValue, curValue) => prevValue + curValue,
	0
);

const App = () => {
	const donationItems = donations.map((item) => {
		return (
			<li key={item.id}>
				<span>
					{item.name} donated ${item.amount}
				</span>
				{item.caption}
			</li>
		);
	});

	console.log(amount);
	console.log(totalDonations);

	return (
		<>
			<TopBar />
			<main className='container'>
				<section className='sidebar'>
					<RecentDonations donationItems={donationItems} />
				</section>
				<section className=''>
					{/* Progress */}
					<Progress
						targetAmount={targetAmount}
						totalDonations={totalDonations}
					/>
					{/* Donation Form */}
					<DonationForm totalDonations={totalDonations} />
				</section>
			</main>
		</>
	);
};

export default App;
