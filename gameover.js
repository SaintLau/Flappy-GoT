//const wallCanvas = document.getElementById('wall');
//const context = wallCanvas.getContext('2d');

//Define the conditional for the hit
hitWith(obstacle) {
    return !(this.bottom() < obstacle.top() ||
             this.top() > obstacle.bottom() ||
             this.right() < obstacle.left() ||
             this.left() > obstacle.right())
};

//What happens if hit? 
function gameOver() {
    const hit = obstacles.some((obstacle) => {
        return character.hitWith(obstacle);
    });

    if(hit) {
        game.stop();
    }
}