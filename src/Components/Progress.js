import { Component } from "react";


class Progress extends Component{
  constructor(){
    super()
  }

  render(){
    const {donations} = this.props

    let donationAmounts = donations.map((donation) => {
      return donation.amount
    })
    let progress = donationAmounts.reduce((previousValue, currentValue)=>{
     return previousValue+currentValue
    },0)

    return(
      <section className="progress">
        <h2>
          Raised <span className="secondary">${progress}</span> of <span className="secondary">$1000</span>
        </h2>
      </section>
      
     

    )
  }
}
 

export default Progress;
