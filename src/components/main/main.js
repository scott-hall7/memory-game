import React, { useState, useEffect } from "react";
import ScoreContainer from "./score-components/scoreboard-container";
import GamecardGrid from "./gamecard-components/gamecard";
import uniqid from "uniqid";

const Main = () => {
    const [spaceCards, setSpaceCards] = useState([]);
    const [clickedSpaceCards, setClickedSpaceCards] = useState([]);
    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);  

    useEffect(() => {
        async function fetchSpaceImages() {
            const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=UHZtmBiRpvdGCq7gOqqTrUarczYN05JKIWeYnmvb&start_date=2023-02-01&end_date=2023-02-20");
            const spaceData = await response.json();
            console.log(spaceData);
            setSpaceCards(loadPlayingCards(spaceData))
          }

          fetchSpaceImages();
        }, []);

        const loadPlayingCards = (data) =>    {
            const spaceImagesArray = [];
            for(let i = 0; i < data.length; i++)    {
                spaceImagesArray.push({title: data[i].title, url: data[i].url, id: uniqid()})
                console.log('hi')
            }
            return spaceImagesArray;
        }

        const handleCardClick = (e) =>  {
            setSpaceCards(shuffleCards(spaceCards))
        }

        const startRound = () => {

        }

        const resetGame = () => {
            setSpaceCards([])
            setClickedSpaceCards([])
            setCurrentScore(0);
        }
    

    return (
        <div className="main-container">
            <ScoreContainer currentScore={currentScore} highScore={highScore} />
            <GamecardGrid spaceCards={spaceCards} handleCardClick={handleCardClick} />
        </div>
    );
}

export default Main;