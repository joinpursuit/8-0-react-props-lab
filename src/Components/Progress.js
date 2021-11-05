import { Component } from "react";

class Progress extends Component{
  constructor(){
    super();
  }

  render(){
    const { donations } = this.props;
    const reducer = (previousValue, currentValue) => previousValue + currentValue;

    let allDonations = donations.map((donation)=>{
      return ( donation.amount )
    })
    
    let total = allDonations.reduce(reducer, 0)

    return(
      <section className="progress">
        <h2>
          Raised <span className="secondary">${ total }</span> of
          <span className="secondary"> ${ this.props.targetAmount }</span>
        </h2>
      </section>
    )
  }
}

export default Progress;
