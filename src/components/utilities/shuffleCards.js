const shuffleCards = (cardsArray) => {
    return cardsArray.sort((a, b) => 0.5 - Math.random());
}

export default shuffleCards;