const Progress = (props) => {
  const { amountDonated, targetAmount } = props
  
    return (
      <section>
        <h2>
          Raised <span>${amountDonated}</span> of <span>${targetAmount}</span>
        </h2>
      </section>
    );
}

export default Progress;
