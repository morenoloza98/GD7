import React from 'react';
import '../css/Button.css';

function Button(props){

    const styles = {
        color: props.fontColor,
        backgroundColor: props.color 
    };

    return(
        <div>
            <button style={styles} onClick={props.onClick} className="button" >{props.label}</button>
        </div>
    )
}

export default Button;