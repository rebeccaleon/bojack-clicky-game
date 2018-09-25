import React from "react";
import "./card.css";

const Card = props => (
    <div 
    onClick={() => props.handleClick(props.letter)} 
    key={props.letter} 
    className="card"
    >
        {props.letter}
    </div>
);

export default Card;