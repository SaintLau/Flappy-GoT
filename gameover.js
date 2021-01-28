let gameOverSentence = [
    "Valar Morghulis",
    "If you think this has a happy ending you haven’t been paying attention.",
    "I failed. Good. Now go fail again.",
    "The night is dark and full of terrors",
    "The Lannisters send their regards",
    "This in not the day I die",
    "For the Watch",
    "SHAME! SHAME! SHAME!"
]

let randomGameOverSentence = gameOverSentence[Math.floor(Math.random() * gameOverSentence.length)];



//What happens if hit? 

function gameOver() {
    const hit = obstacles.some((obstacle) => {
        return character.hitWith(obstacle); //+ the randomGameOverSentence?
    });

    if(hit) {
        hitSound.playAudio()
        
        game.stop();
        const endMessage = document.getElementById('end-message');
        endMessage.classList.remove('hidden');
        endMessage.innerText = randomGameOverSentence;
    } 
}