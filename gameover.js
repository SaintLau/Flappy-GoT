//const wallCanvas = document.getElementById('wall');
//const context = wallCanvas.getContext('2d');


//What happens if hit? 

function gameOver() {
    const hit = obstacles.some((obstacle) => {
        return character.hitWith(obstacle);
    });

    if(hit) {
        game.stop();
    } 
}