const Progress = ({targetAmount, donations}) => {
  
  const totalDon = donations.reduce((accumilator, { amount }) => {
    return accumilator + amount}, 0)
  
  return (
    <section>
      <h2>
        Raised <span> ${totalDon}</span> of 
        <span>${targetAmount}</span>
      </h2>
    </section>
  )
};

export default Progress;
