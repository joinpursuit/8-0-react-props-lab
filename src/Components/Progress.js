
import { getTotal } from "../Helper";
const Progress = ({ donations, targetAmount }) => {
  const recievedDonation = getTotal(donations);

  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${recievedDonation}</span> of
        <span className="secondary"> ${targetAmount}</span>
      </h2>
    </section>
  );
};

export default Progress;