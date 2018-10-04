function computerPlay() {
    let hands = ['Rock', 'Paper', 'Scissors']
    let hand = hands[Math.floor(Math.random()*hands.length)]
    return hand;
}