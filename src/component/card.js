import React from 'react';
import './card.css';

const card = (props) => {
    return (
        <div className="Card">
           <span style={{verticalAlign:"center",position:"relative",top:"5px"}}><p> {props.title} <img src={props.src} alt="logo" /></p>
            <h2>  {props.value} </h2></span>
        </div>
    );
}

export default card;