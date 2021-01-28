const image = new Image();
image.src = '/images/throne2.jpeg'

const backgroundImage = {
    image: image,
    x: 0,
    speed: -1,
        move: function() {
        this.x += this.speed; 
        this.x %= wallCanvas.width; 
    },
    draw: function() {
        context.drawImage(this.image, this.x, 0);
        context.drawImage(this.image, this.x + wallCanvas.width, 0);
    }
}

function updateCanvasBackground() {
      backgroundImage.move();
      backgroundImage.draw();
      
    
}

