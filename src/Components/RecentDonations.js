import React, { Component } from "react";

export default class RecentDonations extends Component {
	render() {
		const { name, amount, caption } = this.props.each;
		return (
			<section>
				<ul>
					<li>
						<span>
							{name} donated ${amount}
						</span>
						{caption}
					</li>
				</ul>
			</section>
		);
	}
}
