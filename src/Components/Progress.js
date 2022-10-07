//? For the progress section, you will need to replace the value `$0` with a dynamic value based on the donations.
const Progress = ({ donations, goal }) => {
  return (
    <section className="progress">
      <h2>
        Raised{" "}
        <span className="secondary">
          ${donations.reduce((acc, dono) => acc + dono.amount, 0)}
        </span>{" "}
        of
        <span className="secondary"> ${goal}</span>
      </h2>
    </section>
  );
};

export default Progress;
