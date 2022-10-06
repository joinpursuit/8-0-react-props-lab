const Progress = ({ donations }) => {
  //? For the progress section, you will need to replace the value `$0` with a dynamic value based on the donations.
  return (
    <section className="progress">
      <h2>
        Raised{" "}
        <span className="secondary">
          {
            const ProgressBar = donations.reduce((acc, dono)=>{
              return acc + dono.amount
            }, 0)
return ProgressBar
          }
        </span>{" "}
        of
        <span className="secondary">$1000</span>
      </h2>
    </section>
  );
};

export default Progress;
