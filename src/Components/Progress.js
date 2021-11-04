/*
const Progress = () => {
  return null;
};
*/

import { Component } from "react";

class Progress extends Component {
  constructor() {
    super();
  }
  render() {
    const {donations} = this.props;
    let total = donations.map(donated => donated.amount).reduce((a, b) => a + b, 0)
    
    return(
      <section class="progress">
        <h2>Raised <span class="secondary">${total}</span> of
        <span class="secondary"> $1000</span>
        </h2>
      </section>
    )
  }
}


export default Progress;
