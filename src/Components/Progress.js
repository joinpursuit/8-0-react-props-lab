const Progress = ({donations, targetAmount}) => {

  let total = 0

  for(let i = 0;i<donations.length;i++){
    total+=donations[i]['amount']
  }

  return (

 
    
  <section className="progress">
    
  <h2>
    Raised <span className="secondary">${total}</span> of
    <span className="secondary"> ${targetAmount}</span>
  </h2>
</section>
  );
};

export default Progress;
