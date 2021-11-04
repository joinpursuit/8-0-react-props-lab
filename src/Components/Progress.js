import { Component } from "react";

class Progress extends Component{
  constructor(){
    super();
  }

  render(){
    return (
    <section class="progress">
      <h2>
        Raised <span class="secondary">$0</span> of
        <span class="secondary">$1000</span>
      </h2>
    </section>
    )
  }
}

export default Progress;
