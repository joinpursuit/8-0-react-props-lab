import { Component } from "react";

class TopBar extends Component {
  constructor(props){
    super(props)
  }
  render(){
  return (
    <header>
      <h1>
        GoFund<span>Me</span>
      </h1>
      <p>Help me go on a vacation to a beach somewhere!</p>
    </header>
  );
}
};

export default TopBar;
