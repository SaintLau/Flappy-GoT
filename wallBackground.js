//const wallCanvas = document.getElementById('wall');
//const context = wallCanvas.getContext('2d');

const image = new Image();
image.src = 'images/ice-game-of-thrones-a-song-of-ice-and-fire-the-wall-wallpaper-preview.jpg'

const backgroundImage = {
    image: image,
    x: 0,
    speed: -1,
        move: function() {
        this.x += this.speed; //-1 -2 -3 
        this.x %= wallCanvas.width; //-500%500=0 => -1 -2 -3
    },
    draw: function() {
        context.drawImage(this.image, this.x, 0);
        context.drawImage(this.image, this.x + wallCanvas.width, 0);
    }
}

function updateCanvasBackground() {
      backgroundImage.move();
    //  context.clearRect(0, 0, wallCanvas.width, wallCanvas.height);
      backgroundImage.draw();
      
    //  requestAnimationFrame(updateCanvas);
}

//updateCanvas();