import React from 'react';
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
    myStopFunction() {
        clearInterval(this.interval);
        clearInterval(this.timer);
    }

    // componentWillUnmount () {
        
    //     clearInterval(this.interval);
    // }

    render () {
        if(this.state.seconds === 15){
            if(this.state.highestScore < this.state.score){
                this.setState({
                    highestScore : this.state.score
                });
            }
            console.log(this.state.highestScore);
            console.log("1 minute over");
            this.myStopFunction();
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

            </div>
        )
    }
}import React from 'react';
import './Main.css';
import Helper from './Helper';

export default class Main extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			name : "",
			array : [0,0,0],
			score : 0,
			seconds : 0
		}
		this.onClick = this.onClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
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
    handleChange(e){
    	this.setState({
    		name : e.target.value
    	});
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
	myStopFunction() {
	    clearInterval(this.interval);
	    clearInterval(this.timer);
	}

    componentWillUnmount () {
        
        clearInterval(this.interval);
    }

	render () {
		//console.log(this.state.seconds);
    	if(this.state.seconds === 15){
    		console.log("1 minute over");
    		this.myStopFunction();
    		javascript:void(0);
    	}
        return (
            <div className="container">
            	<div className="main">
	                <h3>Smash the nut</h3>
	                <input placeholder="Enter Your Name" onChange={this.handleChange}/>
	                
	                <p>Timer :: {this.state.seconds}</p>
	                <div className="scores">
						Your Score: {this.state.score}
	                </div>
	                {this.state.array.map((item, index) => {
	                    return (
	                        <Helper key={index} isUp={item} onHit={e => this.onClick(index)} sec={this.state.seconds}/>
	                    )
	                })}

	            </div>
            </div>
        )
    }
}