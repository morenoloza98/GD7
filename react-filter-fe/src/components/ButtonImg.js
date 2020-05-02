import React, { useState } from 'react';
import '../css/ButtonImg.css'

function ButtonImg(props){
    // useState, volver a enviar los atributos
    const [bgColor, setState] = useState('white');
    // const stateChanger = props.stateChanger;
    

    let handleClick = () =>{
        if(bgColor === 'white'){
            setState("rgba(23, 36, 171, 0.05)");
        } else {
            setState('white');
        }
    } 

    let handleStateChange = (event) => {
        let name = event.target.getAttribute('label');
        props.stateChanger(name);
        handleClick();
    }

    return(
        <div className="cell" label={props.label} onClick={handleStateChange} style={{backgroundColor: bgColor}}>
            <input type="image" label={props.label} alt={props.label} src={props.src} onClick={handleStateChange}/><br/>
            <span>{props.label}</span>
        </div>
    )
}

export default ButtonImg;