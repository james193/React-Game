import React from 'react';
import { withRouter } from "react-router-dom";
import './Main.css';
import Helper from './Helper';

class Main extends React.Component{
	constructor(props){
		super(props);

        this.state = {
            array : [0,0,0],
            seconds : 0
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
        let odin = this.props.status;
        if (arr[index]) {
            arr[index] = false;
            this.props.changeScore(odin.score);
        }
    }
    handleButton(){
        this.setState({
            array : [0,0,0],
            seconds : 0
        });
        this.props.changeScore(-1);         
        this.timer = setInterval(() => {
            let  arr  = this.state.array;
            arr.fill(false);
            if (Math.random() >= 0.5) {
                arr[Math.floor(Math.random() * 3)] = true;
            }
            this.setState({
                arr
            })
        }, 900);

        this.interval = setInterval(() => this.tick(), 1000);
    }
    goHome(){
        this.setState({
            array : [0,0,0],
            seconds : 0
        });
        this.props.changeScore(-1);
        this.props.history.push("/");
    }
    StopFunction() {
        clearInterval(this.interval);
        clearInterval(this.timer);
        let odin = this.props.status;
        if(odin.highestScore < odin.score){
                this.props.changeHigh(odin.score);
        }
        this.props.getFinal();   
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
        }, 900);

        this.interval = setInterval(() => this.tick(), 1000);

    }
	
	render () {
        let odin = this.props.status;
    	if(this.state.seconds === 15){
    		this.StopFunction();
    	}
        return (
        	<div className="main">
                <p>Timer :: {this.state.seconds}</p>
                <div className="scores">
					Your Score: {odin.score}
                </div>
                {this.state.array.map((item, index) => {
                    return (
                        <Helper key={index} isUp={item} onHit={e => this.onClick(index)} sec={this.state.seconds}/>
                    )
                })}
                <button onClick={this.handleButton}>Play Again</button>
                <button onClick={this.goHome}>Home</button>
                <p>Highest Score is : {odin.highestScore}</p>
            </div>
        )
    }
}

export default withRouter(Main);