export default function Progress(props) {
  const {targetAmount, totalAmount} = props;
  return (
    <h2>
    Raised <span class="secondary">${totalAmount}</span> of
    <span class="secondary"> ${targetAmount}</span>
  </h2>
  
  )
  
  }
    