const DonationItem = (donation) => {
    const { donationName, donationPrice } = donation;
    return (
      <li>
        { donationName } - ${ donationPrice }
      </li>
    );
  };
  

export default DonationItem