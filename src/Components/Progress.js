// import addDonations from "../helpers/helper";

const Progress = ({ donations, targAmount }) => {
  return (
    <section className="progress">
      <h2>
        Raised{" "}
        <span className="secondary">
          $
          {donations.reduce((acc, donation) => {
            return (acc += donation.amount);
          }, 0)}
        </span>{" "}
        of
        <span className="secondary"> ${targAmount}</span>
      </h2>
    </section>
  );
};

export default Progress;
