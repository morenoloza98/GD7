import React, { Component } from 'react';
import InputRange from 'react-input-range';
import '../assets/Quilataje/pequeno.png'
import '../assets/Quilataje/grande.png'
import '../css/RangeFilter.css'
import 'react-input-range/lib/css/index.css';

class RangeFilter extends Component{

    constructor(props){
        super(props);
        this.state = {
            rangeValue: {min: this.props.from, max: this.props.to}
        };
    }

    handleChange1 = (event) => {
        let val = parseInt(event.target.value);
        this.setState({ rangeValue:{ min:val, max: this.state.rangeValue.max }  });
        this.props.stateChanger(this.state.rangeValue);
    }
    handleChange = (event) => {
        let val = parseInt(event.target.value);
        this.setState({ rangeValue:{ min:this.state.rangeValue.min, max: val } });
        this.props.stateChanger(this.state.rangeValue);
    }

    render(){
        return(
            <div>
                <div className="flex">
                    <p>{this.props.title}</p>
                    <span className="tooltip">?</span>
                </div>
                    <div className="block">
                        <div className="imgs">
                            <div className="left-img">
                                <input type="image" alt="" src={this.props.imageFrom}/>
                            </div>
                            <div className="right-img">
                                <input type="image" alt="" src={this.props.imageTo} />
                            </div>
                        </div>
                        <InputRange
                            formatLabel={() => ""}
                            maxValue={this.props.to}
                            minValue={this.props.from}
                            step={1}
                            value={this.state.rangeValue}
                            onChange={rangeValue => this.setState({ rangeValue }, this.props.stateChanger(rangeValue))}/>
                        <div className="inputs">
                            <div className="left-input">
                                <input type="number" name="from" value={parseInt(this.state.rangeValue.min)} onChange={this.handleChange1} className="input-number" />
                            </div>
                            <div className="right-input">
                                <input type="number" name="to" value={parseInt(this.state.rangeValue.max)} onChange={this.handleChange} className="input-number" />
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default RangeFilter;