import React from "react";
import Card from "./card"

const GamecardGrid = (props) => {
    return (
        <div className="gamecard-container">
            {props.spaceCards.map((image) => {
                    return <Card url={image.url} alt={image.alt} id={image.id} onClick={props.handleCardClick} />
                })}
        </div>
    );
}

export default GamecardGrid;