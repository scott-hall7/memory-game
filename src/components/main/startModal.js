import React from "react";

const StartModal = (props) => {
    
    return (
        <div className={props.display === true ? "start-modal hide-display": "start-modal"}>
            <h1>Your Mission:</h1>
            <p id="start-text">The ship is running low on resources. You must select locations to determine where we travel to next. If you select a location we have already been to, we will run out of resources. Perform well and you may be promoted.</p>
            <p>Do you accept?</p>
            <button onClick={props.onClick} id="accept-mission">Accept Mission</button>
        </div>
    );
}

export default StartModal;
