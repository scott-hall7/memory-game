import React, { useState, useEffect } from "react";
import StartModal from "./startModal"
import ScoreContainer from "./score-components/scoreboard-container";
import GamecardGrid from "./gamecard-components/gamecard";
import shuffleCards from "../utilities/shuffleCards";
import uniqid from "uniqid";

const Main = () => {
    const [spaceCards, setSpaceCards] = useState([]);
    const [clickedSpaceCards, setClickedSpaceCards] = useState([]);
    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);  
    const [title, setTitle] = useState("Space Recruit");
    const [startGame, setStartGame] = useState(false);

    useEffect(() => {
        async function fetchSpaceImages() {
            const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=UHZtmBiRpvdGCq7gOqqTrUarczYN05JKIWeYnmvb&start_date=2023-02-01&end_date=2023-02-20");
            const spaceData = await response.json();
            setSpaceCards(loadPlayingCards(spaceData))
          }

          fetchSpaceImages();
        }, []);

        const loadPlayingCards = (data) =>    {
            const spaceCardsArray = [];
            for(let i = 0; i < data.length; i++)    {
                spaceCardsArray.push({title: data[i].title, url: data[i].url, id: uniqid()})
            }
            return spaceCardsArray;
        }

        const beginGame = () => {
            setStartGame(true)
        }

        const handleCardClick = (e) =>  {
            setSpaceCards(shuffleCards(spaceCards))
            playRound(e.target.id);
        }

        const playRound = (clickedCard) => {
            if (clickedSpaceCards.find(card => card === clickedCard)) resetGame();
            else {
                setClickedSpaceCards((prevState) => [...prevState, clickedCard])
                setCurrentScore(currentScore + 1)
                if(currentScore >= highScore) setHighScore(currentScore + 1);
                assignTitle();
            } 
        }

        const assignTitle = () => {
            if (highScore >= 20) setTitle("The Only Person to Escape a Black Hole, Ever");
            else if (highScore >= 15) setTitle("The Space Captain");
            else if (highScore >= 10) setTitle("Fleet Commander");
            else if (highScore >= 6) setTitle("Space Pilot");
            else if (highScore >= 3) setTitle("Wormhole Navigator")
        }

        const resetGame = () => {
            setClickedSpaceCards([])
            setCurrentScore(0);
        }
        
    return (
        <div className="main-container">
            <StartModal display={startGame} onClick={beginGame} />
            <ScoreContainer currentScore={currentScore} highScore={highScore} title={title} />
            <GamecardGrid display={startGame} spaceCards={spaceCards} handleCardClick={handleCardClick} />
        </div>
    );
}

export default Main;