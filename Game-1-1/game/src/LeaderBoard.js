import React from 'react';
import { withRouter } from "react-router-dom";

class LeaderBoard extends React.Component{
	constructor(props){
		super(props);
        this.goHome=this.goHome.bind(this);
	}
	goHome(){
        this.props.history.push("/");
    }
	render(){
		/*for (let i = 0; i < localStorage.length; i++){
              let key = localStorage.key(i);
              let value = localStorage.getItem(key);
              console.log(key,value);
        }*/
        var his = JSON.parse(localStorage.getItem("leaderboard1"));
        let a="";
        for(let i=0;i<his.length;i++)
        {
            a+=`Player:${his[i].player_name}  Score:${his[i].scores} `;
        }
        console.log(a);
		return(
			<div>
				<h2>Leader Board</h2>
				<p>Name</p>
				<p>Score</p>
				<button onClick={this.goHome}>Home</button>
			</div>
		);
	}
}

export default withRouter(LeaderBoard);