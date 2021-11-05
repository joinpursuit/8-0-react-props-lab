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
      <section class="progress">
        <h2>
          Raised <span class="secondary">${ total }</span> of
          <span class="secondary"> ${ this.props.targetAmount }</span>
        </h2>
      </section>
    )
  }
}

export default Progress;
