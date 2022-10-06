import addDonations from "../helpers/helper";

const Progress = ({ donations, targAmount }) => {
  let totalDonations = addDonations({ donations });
  return;

  donations.map((donation) => {
    return (
      <h1>
        {" "}
        {totalDonations} of ${targAmount}{" "}
      </h1>
    );
  });
};

export default Progress;
