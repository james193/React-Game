import React, { Component } from 'react';
import {Route,HashRouter} from "react-router-dom";
import './App.css';
import Main from './Main';
import Home from './Home';
import LeaderBoard from './LeaderBoard';

class App extends Component {

  constructor(props){
  	super(props);
	this.state = {
		score : 0,
		seconds : 0,
		highestScore : 0,
		user : '',
		history : []
	}
	this.handleChange = this.handleChange.bind(this);
	this.UpdateHighScore = this.UpdateHighScore.bind(this);
	this.setScore = this.setScore.bind(this);
	this.Final = this.Final.bind(this);
  }	
  handleChange(e){
    this.setState({
      user : e.target.value
    });
  }
  UpdateHighScore(p){
  	this.setState({
		highestScore : p
	});
  }
  setScore(n){
  	this.setState({
        score: n +1
    });
  }
  Final(){
  	let obj = {};
  	let his =[];
  	let flag=0;
    obj.player_name = this.state.user;
    obj.scores = this.state.score;
    this.state.history.push(obj);

    his = JSON.parse(localStorage.getItem("leaderboard1")) || [];
    for(let i=0;i<his.length;i+=1){
    	if(his[i].player_name === obj.player_name){
    		if(his[i].scores < obj.scores){
    			his[i].scores=obj.scores;
    			flag=1;
    		}
    		else if(his[i].scores > obj.scores)
    			flag=1;
    	}
    }
    if(flag===0)
		his.push(obj);
	localStorage.setItem("leaderboard1", JSON.stringify(his));
	alert("Time Up,Well played "+this.state.user);
  }
  render() {
    return (
      <HashRouter>
  		<div>
  			<Route exact path='/' render={() => <div><Home getInput={this.handleChange}/></div>}/>
  			<Route exact path='/main' render={() => 
  				<div><Main status={this.state} changeHigh={this.UpdateHighScore} changeScore={this.setScore}
  				 getFinal={this.Final}/></div>}/>
  			<Route exact path='/leaderboard' render={() => <div><LeaderBoard statue={this.state.history}/></div>}/>
  		</div>
      </HashRouter>
    );
  }
}

export default App;