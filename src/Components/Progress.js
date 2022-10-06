import RecentDonations from "./RecentDonations";

const Progress = ({ donations, targetAmount }) => {
  return (
    <section className="progress">
      <h2>
        Raised{" "}
        <span className="secondary">
          ${donations.reduce((accu, curr) => (accu += curr.amount), 0)}
        </span>{" "}
        of
        <span className="secondary"> ${targetAmount}</span>
      </h2>
    </section>
  );
};

export default Progress;
