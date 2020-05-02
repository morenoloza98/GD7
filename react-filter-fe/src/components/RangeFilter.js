import React, { Component } from 'react';
import MultiSlider, { Progress, Dot } from 'react-multi-bar-slider';
import '../assets/Quilataje/pequeno.png'
import '../assets/Quilataje/grande.png'
import '../css/RangeFilter.css'

class RangeFilter extends Component{

    state = {
        progress: this.props.from,
        progress2: this.props.to,
    };

    handleSlide = (newProgress) => this.setState({ progress: newProgress });

    handleChange1 = (event) => {
        let val = event.target.value;
        this.setState({ progress: val });
    }
    handleChange = (event) => {
        let val = event.target.value;
        this.setState({ progress2: val });
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
                        <MultiSlider
                            width={620}
                            height={5}
                            slidableZoneSize={20}
                            equalColor="#1724ab"
                            style={{ marginBottom: 30 }}
                            onSlide={this.handleSlide}
                            roundedCorners
                        >
                            <Progress height={15} color="#eeeeee" progress={parseInt(this.state.progress)} onChange={this.props.stateChanger({min: this.state.progress, max: this.state.progress2})}>
                                <Dot color="#1724ab" style={{height: 15, width: 15}} />
                            </Progress>
                            <Progress height={15} color="#1724ab" progress={parseInt(this.state.progress2)} onChange={this.props.stateChanger({min: this.state.progress, max: this.state.progress2})}>
                                <Dot color="#1724ab" style={{height: 15, width: 15}} />
                            </Progress>
                        </MultiSlider>
                        <div className="inputs">
                            <div className="left-input">
                                <input type="number" name="from" value={this.state.progress} onChange={this.handleChange1} className="input-number" />
                            </div>
                            <div className="right-input">
                                <input type="number" name="to" value={this.state.progress2} onChange={this.handleChange} className="input-number" />
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default RangeFilter;