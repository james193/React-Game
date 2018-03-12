import React from 'react';
import avocado from './avocado.png';
import './Helper.css';
export default class Helper extends React.Component {

    render () {
        let test;
        if(this.props.isUp)
            test="imgYes";
        else
            test="";
        return (
            <div className="help">
                <div className={`imgx ${test}`} style={{backgroundImage: `url(${avocado})`}} onClick={this.props.onHit}>
                    
                </div>
            </div>
        );
    }
}