import React from "react";

class Progress extends React.Component {
  render() {
    const { donations, targetAmount } = this.props;
    const totalProgress = donations.reduce((acc, obj) => acc + obj.amount, 0);
    const percentage = (totalProgress/targetAmount) * 100;

    const containerStyles = {
      height: 30,
      width: "100%",
      backgroundColor: "#e0e0de",
      borderRadius: 50,
    };
  
    const fillerStyles = {
      height: "100%",
      width: `${percentage}%`,
      backgroundColor: '#2ec4b6',
      borderRadius: "inherit",
      textAlign: "right",
    };
  
    const labelStyles = {
      padding: 5,
      color: "white",
      fontWeight: "bold",
      lineHeight: '30px' 
    };
    
    return (
      <>
        <h2>
          Raised <span className="secondary">${totalProgress}
          </span> of <span className="secondary">${targetAmount}</span>
        </h2>
        <div style={containerStyles}>
          <div style={fillerStyles}>
            <span style={labelStyles}>{`${percentage}%`}</span>
          </div>
        </div>
      </>
    )
  }
}

export default Progress;