import { Component } from "react";
import donations from "../data/donations";
import targetAmount from "../data/targetAmount";

class Progress extends Component{
  constructor(){
    super();
  }

  render(){
    let total = 0;
    donations.map((donation)=>{
      return ( total += donation.amount )
    })


    return(
      <section class="progress">
        <h2>
          Raised <span class="secondary">${ total }</span> of
          <span class="secondary"> ${ targetAmount }</span>
        </h2>
      </section>
    )
  }
}

export default Progress;
