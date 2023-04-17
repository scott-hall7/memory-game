import React from "react";
import Card from "./card"

const GamecardGrid = (props) => {
    return (
        <div className={props.display === true ? "gamecard-container": "gamecard-container disable-click"}>
            {props.spaceCards.map((image) => {
                    return <Card url={image.url} alt={image.alt} id={image.id} onClick={props.handleCardClick} />
                })}
        </div>
    );
}

export default GamecardGrid;