import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
 
class Home extends Component {

  constructor(props){
    super(props);

    this.handleClick=this.handleClick.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleClick(){
     this.props.history.push("/main");
  }
  handleSubmit(){
      this.props.history.push("/leaderboard");
  }
  render() {
    return (
      <div className = "header">
      <h2> Smash The Nut </h2>
      <input type="text" placeholder="Enter Your Name" onChange={this.props.getInput}/>
      <br/><br/>
      <button onClick={this.handleClick}>Play</button>
      <button onClick={this.handleSubmit}>LeaderBoard</button>
      </div>
    );
  }
}


export default withRouter(Home);