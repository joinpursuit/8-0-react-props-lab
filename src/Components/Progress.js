

// interloate the props -donations and targetAMount- from the parent.js file you are going to use in the child.js file - TO GET THE TOTAL AMOUNT OF ALL DONATIONS 
const Progress = ({donations, targetAmount}) => {

  // create a value starting at 0
  let raisedMoney = 0;
  return (
  <h2>
    Raised <span className="secondary">
      {
        // loop through the array of donations - for each donation 
        donations.map((donation) => {
          // add each donation amount to the starting value
          raisedMoney += donation.amount;
        })
      }
      {/* display the interpolated sum of all the donation amounts */}
      ${raisedMoney}
      </span> of
      {/* display the interpolated prop - targetAmount */}
    <span className="secondary"> ${targetAmount}</span>
  </h2>
);
};

export default Progress;
