var images = [
    { id: '100', opened: false, matched: false },
    { id: '200', opened: false, matched: false },
    { id: '300', opened: false, matched: false },
    { id: '400', opened: false, matched: false },
    { id: '500', opened: false, matched: false },
    { id: '600', opened: false, matched: false },
    { id: '700', opened: false, matched: false },
    { id: '800', opened: false, matched: false },
]

var doubledCards = images.concat(images);

var shuffle = (cards) => {
    let currentIndex = cards.length;
    let randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        [cards[currentIndex], cards[randomIndex]] = [cards[randomIndex], cards[currentIndex]];
    }
    return cards;
}

var shuffledCards = shuffle(doubledCards);
export default shuffledCards