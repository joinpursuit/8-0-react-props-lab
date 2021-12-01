import { Component } from "react";

class Progress extends Component   {
constructor(props){
  super(props)
}



   render (){
     console.log(this.props.donations)
  return (
  <section class="progress">
  <h2>
    Raised <span class="raised">{this.props.donations.length}</span> of
    <span class="secondary">$1000</span>
  </h2>
</section>
  );
}
};

export default Progress;
