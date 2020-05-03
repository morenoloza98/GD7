import React, { useState } from 'react';
import '../css/ButtonImg.css'

function ButtonImg(props){

    const [bgColor, setState] = useState('white');
    

    let handleClick = () =>{
        // console.log(name);
        // console.log(props.optSelected);
        if(bgColor === 'white'){
            setState("rgba(23, 36, 171, 0.05)");
        } else {
            setState('white');
        }
    } 

    let handleStateChange = (event) => {
        let name = event.target.getAttribute('label');
        props.stateChanger(name);
        handleClick(name);
    }

    return(
        <div className="cell" label={props.label} onClick={handleStateChange} style={{backgroundColor: bgColor}}>
            <input type="image" label={props.label} alt={props.label} src={props.src}/><br/>
            <span>{props.label}</span>
        </div>
    )
}

export default ButtonImg;