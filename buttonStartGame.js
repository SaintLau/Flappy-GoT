const intro = document.getElementById('intro');
const gameDiv = document.getElementById('the-game');
 
document.getElementById("startGame").onclick = function() { 
    game.selectCharacter('Khaleesi')
    intro.classList.add('hidden');
    gameDiv.classList.remove('hidden');

}

document.getElementById("startGameTwo").onclick = function() { 
    game.selectCharacter('Jon');
    intro.classList.add('hidden');
    gameDiv.classList.remove('hidden');
}