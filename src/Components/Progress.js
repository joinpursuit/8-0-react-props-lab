import { Component } from "react";

class Progress extends Component   {
constructor(props){
  super(props)
}



   render (){
     console.log(this.props.donations)
     let donationsAdded = this.props.donations.reduce(function(donation, i){
      return donation + i.amount
     }, 0);

    
  return (
  <section class="progress">
  <h2>
    Raised <span class="raised">${donationsAdded}</span> of
    <span class="secondary"> $1000</span>
  </h2>
</section>
  );
}
};

export default Progress;
