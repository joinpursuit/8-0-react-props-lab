import React from 'react'


  const RecentDonations = (props) => {
    const { donations } = props;

    const recentDonations = donations.map((donation) => {
      return (
        <section>    
   
            <li>
              <span>
                {donation.name} donated ${donation.amount}
              </span>
              {donation.caption}
            </li>
        </section>
      );
    });

    return (
      <>
        <h2>Recent Donations</h2>
        <ul> {recentDonations}</ul>
      </>
    );
  };

export default RecentDonations;
