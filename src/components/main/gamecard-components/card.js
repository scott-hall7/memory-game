import React from "react";

const Card = (props) => {
    return (
        <img src={props.url} alt={props.alt} id={props.id} className="space-card-image" onClick={props.onClick} />
    );
}

export default Card;