const addDonations = ({ donations }) => {
  const donationTotal = donations.reduce((acc, donation) => {
    return acc + donation.amount;
  }, 0);
  return donationTotal;
};

export default addDonations;
