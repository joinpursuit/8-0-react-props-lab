export const getTotal = (donations) => {
    const total =
      donations.reduce((acc, currVal) => {
        return acc + parseInt(currVal.amount);
      }, 0);
  
    return total;
  };