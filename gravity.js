//const wallCanvas = document.getElementById('wall');
//const context = wallCanvas.getContext('2d');


//to add gravity to character
//let gravity = 0.6; //value from example

this.hitBot() = function () {
    let bottom = game.wallCanvas.height - this.height;
    if (this.y > bottom) {
        this.y = bottom;
    }
}
