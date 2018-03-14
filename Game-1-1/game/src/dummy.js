import React from 'react';
import { browserHistory } from "react-router";
import './Main.css';
import Helper from './Helper';

export default class Main extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			array : [0,0,0],
			score : 0,
			seconds : 0,
			highestScore : 0
		}
		this.onClick = this.onClick.bind(this);
        this.handleButton =this.handleButton.bind(this);
        this.goHome=this.goHome.bind(this);
	}

	tick() {
	    this.setState(prevState => ({
	      seconds: prevState.seconds + 1
	    }));
  	}
	onClick (index) {
        let  arr  = this.state.array;
        if (arr[index]) {
            arr[index] = false;
            this.setState({
                score: this.state.score +1
            })
        }
    }
    handleButton(){
        this.setState({
            array : [0,0,0],
            score : 0,
            seconds : 0,
        });
        this.timer = setInterval(() => {
            let  arr  = this.state.array;
            arr.fill(false);
            if (Math.random() >= 0.5) {
                arr[Math.floor(Math.random() * 3)] = true;
            }
            this.setState({
                arr
            })
        }, 800);

        this.interval = setInterval(() => this.tick(), 1000);
    }
    goHome(){
        browserHistory.push("/home");
    }
    StopFunction() {
        clearInterval(this.interval);
        clearInterval(this.timer);
        if(this.state.highestScore < this.state.score){
            this.setState(prevSt => ({
              highestScore: prevSt.score 
            }));    
        }
         let sor = this.state.score; 
        localStorage.setItem('score',sor);    
    }
    componentDidMount () {

        this.timer = setInterval(() => {
            let  arr  = this.state.array;
            arr.fill(false);
            if (Math.random() >= 0.5) {
                arr[Math.floor(Math.random() * 3)] = true;
            }
            this.setState({
                arr
            })
        }, 700);

        this.interval = setInterval(() => this.tick(), 1000);

    }
	
	render () {
        var odin = this.props.status;
    	if(this.state.seconds === 15){
    		if(this.state.highestScore < this.state.score){
    			this.setState({
    				highestScore : this.state.score
    			});
    		}
    		this.StopFunction();
    	}
        return (
        	<div className="main">
                <p>Timer :: {this.state.seconds}</p>
                <div className="scores">
					Your Score: {this.state.score}
                </div>
                {this.state.array.map((item, index) => {
                    return (
                        <Helper key={index} isUp={item} onHit={e => this.onClick(index)} sec={this.state.seconds}/>
                    )
                })}
                <button onClick={this.handleButton}>Play Again</button>
                <button onClick={this.goHome}>Home</button>
                <p>Highest Score is : {this.state.highestScore}</p>
            </div>
        )
    }
}


<button onClick={this.handleButton}>Play Again</button>
                <button onClick={this.goHome}>Home</button>