import React, { useState } from 'react';
import '../css/ButtonImg.css'

function ButtonImg(props){
    // useState, volver a enviar los atributos
    const [bgColor, setState] = useState('white');
    

    let handleClick = () =>{
        if(bgColor === 'white'){
            setState("rgba(23, 36, 171, 0.05)");
        } else {
            setState('white');
        }
    } 

    let handleStateChange = (event) => {
        let name = event.target.getAttribute('label');
        props.setStates(event, name);
    }

    return(
        <div className="cell" onClick={handleClick} style={{backgroundColor: bgColor}}>
            <input type="image" label={props.label} alt={props.label} src={props.src} onClick={handleStateChange}/><br/>
            <span>{props.label}</span>
        </div>
    )
}

export default ButtonImg;