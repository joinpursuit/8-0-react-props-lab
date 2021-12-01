import { Component } from "react";

class Progress extends Component{
  constructor() {
    super();
  }

  render(){
    const {donations, targetAmount} = this.props


    let dynamicDonations = donations.map((donation)=>donation.amount).reduce((previousVal, nextVal)=> previousVal+ nextVal)
    console.log(dynamicDonations)

    return (
      <section className='progress'>
        <h2>Raised 
          <span className='secondary'> ${dynamicDonations}</span> of 
          <span className='secondary'> ${targetAmount}</span>
        </h2>
      </section>
    );
  }
}

export default Progress;